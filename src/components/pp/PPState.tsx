"use client";

import { GameplayMod } from "@/lib/modIcons";
import React from "react";

interface PPState {
  mapStats: { sr: number; od: number; maxCombo: number };
  accuracy: { good: number; miss: number };
  selectedMods: Record<GameplayMod, boolean>;
}

type PPAction =
  | {
      type:
        | "setStarRating"
        | "setOverallDifficulty"
        | "setMaxCombo"
        | "setGood"
        | "setMiss";
      value: number;
    }
  | {
      type: "modSelected";
      mod: GameplayMod;
    };

const initialPPState: PPState = {
  mapStats: { sr: 0, od: 5, maxCombo: 1 },
  accuracy: { good: 0, miss: 0 },
  selectedMods: {
    dt: false,
    hr: false,
    ez: false,
    ht: false,
    hd: false,
    fl: false,
  },
};

function reducer(state: PPState, action: PPAction) {
  switch (action.type) {
    case "setStarRating": {
      return {
        ...state,
        mapStats: {
          ...state.mapStats,
          sr: action.value < 0 ? 0 : action.value,
        },
      };
    }
    case "setOverallDifficulty": {
      return {
        ...state,
        mapStats: {
          ...state.mapStats,
          od: action.value < 0 ? 0 : action.value > 10 ? 10 : action.value,
        },
      };
    }
    case "setMaxCombo": {
      return {
        ...state,
        mapStats: {
          ...state.mapStats,
          maxCombo: action.value < 0 ? 0 : Math.floor(action.value),
        },
      };
    }
    case "setGood": {
      return {
        ...state,
        accuracy: {
          ...state.accuracy,
          good: action.value < 0 ? 0 : Math.floor(action.value),
        },
      };
    }
    case "setMiss": {
      return {
        ...state,
        accuracy: {
          ...state.accuracy,
          miss: action.value < 0 ? 0 : Math.floor(action.value),
        },
      };
    }
    case "modSelected": {
      return {
        ...state,
        selectedMods: {
          ...state.selectedMods,
          ez: state.selectedMods["ez"] && action.mod !== "hr",
          hr: state.selectedMods["hr"] && action.mod !== "ez",
          dt: state.selectedMods["dt"] && action.mod !== "ht",
          ht: state.selectedMods["ht"] && action.mod !== "dt",
          [action.mod]: !state.selectedMods[action.mod],
        },
      };
    }
  }
}

export const PPStateContext = React.createContext<PPState>(initialPPState);
export const PPDispatchContext = React.createContext<React.Dispatch<PPAction>>(
  () => null
);

type PPStateProviderProps = { children: React.ReactNode };

export function PPStateProvider({ children }: PPStateProviderProps) {
  const [PPState, dispatch] = React.useReducer(reducer, initialPPState);

  return (
    <PPStateContext.Provider value={PPState}>
      <PPDispatchContext.Provider value={dispatch}>
        {children}
      </PPDispatchContext.Provider>
    </PPStateContext.Provider>
  );
}
