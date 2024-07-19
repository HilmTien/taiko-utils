"use client";

import { ODAdjustingMod } from "@/lib/modIcons";
import React from "react";

interface ODState {
  table: { min: number; max: number; step: number };
  interactive: {
    activeMods: Record<ODAdjustingMod, boolean>;
    od: number;
    allowIllegalModCombos: boolean;
    useLinearOD: boolean;
  };
}

type ODAction =
  | {
      type: "setTableMin" | "setTableMax" | "setTableStep" | "setInteractiveOD";
      value: number;
    }
  | {
      type: "interactiveModChanged";
      mod: ODAdjustingMod;
    }
  | {
      type: "useLocalStorage";
      state: ODState;
    }
  | {
      type: "setInteractiveAllowIllegalModCombos" | "setInteractiveUseLinearOD";
      value: boolean;
    };

const initialODState: ODState = {
  table: { min: 0, max: 10, step: 0.1 },
  interactive: {
    activeMods: { dt: false, hr: false, ez: false, ht: false },
    od: 5,
    allowIllegalModCombos: false,
    useLinearOD: false,
  },
};

function getFormOD(value: number) {
  if (Number.isNaN(value)) {
    return 0;
  } else if (value < 0) {
    return 0;
  } else if (value > 12) {
    return 12;
  } else {
    return value;
  }
}

function reducer(state: ODState, action: ODAction) {
  switch (action.type) {
    case "useLocalStorage": {
      return action.state;
    }
    case "setTableMin": {
      return {
        ...state,
        table: {
          ...state.table,
          min: getFormOD(action.value),
          max:
            action.value > 12
              ? 12
              : action.value > state.table.max
              ? action.value
              : state.table.max,
        },
      };
    }
    case "setTableMax": {
      return {
        ...state,
        table: {
          ...state.table,
          min:
            action.value < 0
              ? 0
              : state.table.min > action.value
              ? action.value
              : state.table.min,
          max: getFormOD(action.value),
        },
      };
    }
    case "setTableStep": {
      return {
        ...state,
        table: {
          ...state.table,
          step:
            Number.isNaN(action.value) || action.value <= 0
              ? 0.01
              : action.value,
        },
      };
    }
    case "interactiveModChanged": {
      return {
        ...state,
        interactive: {
          ...state.interactive,
          activeMods: {
            ...state.interactive.activeMods,
            // disable other mods for invalid mods (eg. EZHR, HTHRDT)
            ez:
              state.interactive.activeMods["ez"] &&
              (action.mod !== "hr" || state.interactive.allowIllegalModCombos),
            hr:
              state.interactive.activeMods["hr"] &&
              (action.mod !== "ez" || state.interactive.allowIllegalModCombos),
            dt:
              state.interactive.activeMods["dt"] &&
              (action.mod !== "ht" || state.interactive.allowIllegalModCombos),
            ht:
              state.interactive.activeMods["ht"] &&
              (action.mod !== "dt" || state.interactive.allowIllegalModCombos),
            [action.mod]: !state.interactive.activeMods[action.mod],
          },
        },
      };
    }
    case "setInteractiveOD": {
      return {
        ...state,
        interactive: {
          ...state.interactive,
          od: getFormOD(action.value),
        },
      };
    }
    case "setInteractiveAllowIllegalModCombos": {
      return {
        ...state,
        interactive: {
          ...state.interactive,
          allowIllegalModCombos: action.value,
        },
      };
    }
    case "setInteractiveUseLinearOD": {
      return {
        ...state,
        interactive: {
          ...state.interactive,
          useLinearOD: action.value,
        },
      };
    }
  }
}

export const ODStateContext = React.createContext<ODState>(initialODState);
export const ODDispatchContext = React.createContext<React.Dispatch<ODAction>>(
  () => null
);

type ODStateProviderProps = { children: React.ReactNode };

export function ODStateProvider({ children }: ODStateProviderProps) {
  const [ODState, dispatch] = React.useReducer(reducer, initialODState);

  return (
    <ODStateContext.Provider value={ODState}>
      <ODDispatchContext.Provider value={dispatch}>
        {children}
      </ODDispatchContext.Provider>
    </ODStateContext.Provider>
  );
}
