"use client";

import React from "react";

interface ODState {
  table: { min: number; max: number; step: number };
}

type ODAction = {
  type: "setTableMin" | "setTableMax" | "setTableStep";
  value: number;
};

const initialODState: ODState = {
  table: { min: 0, max: 10, step: 0.1 },
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
