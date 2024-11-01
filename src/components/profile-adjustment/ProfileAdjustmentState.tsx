"use client";

import { Score as ExternalScore } from "@/lib/interfaces/osu-scores-best/interface";
import { flipSetMember } from "@/lib/utils";
import React from "react";

interface BeatmapDetails {
  artist: string;
  title: string;
  difficulty: string;
  url: string;
}

interface ScoreStatistics {
  accuracy: number;
  great: number;
  ok: number;
  miss: number;
  combo: number;
  maxCombo: number;
  mods: Set<string>;
}

interface Score {
  beatmapDetails: BeatmapDetails;
  id: number;
  pp: number;
  statistics: ScoreStatistics;
  timestamp: Date;
}

export interface ProfileAdjustmentState {
  userId: number;
  topPlays: Array<Score>;
  customIDs: Set<number>;
  customTopPlays: Map<number, number>;
  lowestPP: number;
  excludeCL: Set<string>;
}

type ProfileAdjustmentAction =
  | { type: "initTopPlays"; data: ExternalScore[]; userId: string }
  | {
      type: "flipID";
      id: number;
    }
  | {
      type: "setCustomTopPlay";
      id: number;
      pp: number;
    }
  | {
      type: "setExcludeCL";
    };

const initialProfileAdjustmentState: ProfileAdjustmentState = {
  userId: Number.NaN,
  topPlays: [],
  customIDs: new Set(),
  customTopPlays: new Map(),
  lowestPP: 0,
  excludeCL: new Set(["CL"]),
};

function reducer(
  state: ProfileAdjustmentState,
  action: ProfileAdjustmentAction
) {
  switch (action.type) {
    case "initTopPlays": {
      return {
        ...state,
        userId: parseInt(action.userId),
        topPlays: action.data.map((score) => {
          return {
            id: score.id,
            pp: score.pp,
            statistics: {
              accuracy: score.accuracy * 100,
              great: score.statistics.great || 0,
              ok: score.statistics.ok || 0,
              miss: score.statistics.miss || 0,
              combo: score.max_combo,
              maxCombo: score.maximum_statistics.great,
              mods: new Set(
                (score.mods as Array<{ acronym: string }>).map((mod) => {
                  return mod.acronym;
                })
              ),
            },
            timestamp: new Date(score.ended_at),
            beatmapDetails: {
              artist: score.beatmapset.artist,
              title: score.beatmapset.title,
              difficulty: score.beatmap.version,
              url: score.beatmap.url,
            },
          };
        }),
        customTopPlays: new Map(
          action.data.map((score) => {
            return [
              score.id,
              action.data.at(-1) === undefined ? 0 : action.data.at(-1)!.pp,
            ];
          })
        ),
        lowestPP: action.data.at(-1) === undefined ? 0 : action.data.at(-1)!.pp,
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
    case "setExcludeCL": {
      return {
        ...state,
        excludeCL: flipSetMember(state.excludeCL, "CL"),
      };
    }
    case "flipID": {
      return {
        ...state,
        customIDs: flipSetMember(state.customIDs, action.id),
      };
    }
  }
}

export const ProfileAdjustmentStateContext =
  React.createContext<ProfileAdjustmentState>(initialProfileAdjustmentState);
export const ProfileAdjustmentDispatchContext = React.createContext<
  React.Dispatch<ProfileAdjustmentAction>
>(() => null);

type ProfileAdjustmentStateProviderProps = { children: React.ReactNode };

export function ProfileAdjustmentStateProvider({
  children,
}: ProfileAdjustmentStateProviderProps) {
  const [ProfileAdjustmentState, dispatch] = React.useReducer(
    reducer,
    initialProfileAdjustmentState
  );

  return (
    <ProfileAdjustmentStateContext.Provider value={ProfileAdjustmentState}>
      <ProfileAdjustmentDispatchContext.Provider value={dispatch}>
        {children}
      </ProfileAdjustmentDispatchContext.Provider>
    </ProfileAdjustmentStateContext.Provider>
  );
}
