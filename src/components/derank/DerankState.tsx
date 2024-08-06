"use client";

import { flipSetMember } from "@/lib/utils";
import React from "react";

interface BeatmapDetails {
  artist: string;
  title: string;
  difficulty: string;
}

interface Score {
  accuracy: number;
  beatmapDetails: BeatmapDetails;
  id: number;
  pp: number;
}

export interface DerankState {
  topPlays: Array<Score>;
  derankedIDs: Set<number>;
  customTopPlays: Map<number, number>;
  lowestPP: number;
}

type DerankAction =
  | { type: "initTopPlays"; data: Array<any> }
  | {
      type: "flipID";
      id: number;
    }
  | {
      type: "setCustomTopPlay";
      id: number;
      pp: number;
    };

const initialDerankState: DerankState = {
  topPlays: [],
  derankedIDs: new Set(),
  customTopPlays: new Map(),
  lowestPP: 0,
};

function reducer(state: DerankState, action: DerankAction) {
  switch (action.type) {
    case "initTopPlays": {
      return {
        ...state,
        topPlays: action.data.map((score) => {
          return {
            accuracy: score.accuracy * 100,
            id: score.id,
            pp: score.pp,
            beatmapDetails: {
              artist: score.beatmapset.artist,
              title: score.beatmapset.title,
              difficulty: score.beatmap.version,
            },
          };
        }),
        customTopPlays: new Map(
          action.data.map((score) => {
            return [score.id, action.data.at(-1).pp];
          })
        ),
        lowestPP: action.data.at(-1).pp,
      };
    }
    case "setCustomTopPlay": {
      return {
        ...state,
        customTopPlays: Number.isNaN(action.pp)
          ? state.customTopPlays.set(action.id, state.lowestPP)
          : state.customTopPlays.set(action.id, action.pp),
      };
    }
    case "flipID": {
      return {
        ...state,
        derankedIDs: flipSetMember(state.derankedIDs, action.id),
      };
    }
  }
}

export const DerankStateContext =
  React.createContext<DerankState>(initialDerankState);
export const DerankDispatchContext = React.createContext<
  React.Dispatch<DerankAction>
>(() => null);

type DerankStateProviderProps = { children: React.ReactNode };

export function DerankStateProvider({ children }: DerankStateProviderProps) {
  const [DerankState, dispatch] = React.useReducer(reducer, initialDerankState);

  return (
    <DerankStateContext.Provider value={DerankState}>
      <DerankDispatchContext.Provider value={dispatch}>
        {children}
      </DerankDispatchContext.Provider>
    </DerankStateContext.Provider>
  );
}
