"use client";

import { Checkbox } from "@/components/ui/atoms/Checkbox";
import InputField from "@/components/ui/molecules/InputField";
import { round } from "@/lib/utils";
import React from "react";
import {
  ProfileAdjustmentDispatchContext,
  ProfileAdjustmentStateContext,
} from "./ProfileAdjustmentState";

export default function ProfileAdjustmentList() {
  const state = React.useContext(ProfileAdjustmentStateContext);
  const dispatch = React.useContext(ProfileAdjustmentDispatchContext);

  return (
    <ul className="w-max relative">
      {state.topPlays.map((score, i) => {
        const { artist, title, difficulty } = score.beatmapDetails;

        return (
          <li
            key={score.id}
            className="relative rounded-xl my-1 text-xs min-h-16 bg-secondary"
          >
            <div className="px-5 py-3 rounded-xl min-w-0 flex items-center border-b-4 border-solid border-primary">
              <div className="flex flex-1 flex-col min-w-0">
                <div className="self-start block text-sm font-semibold max-w-full">
                  {`${artist} - ${title}`}
                </div>
                <div className="flex gap-4 mt-1 whitespace-nowrap">
                  <span className="text-orange-300 overflow-hidden text-ellipsis whitespace-nowrap">
                    {difficulty}
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 py-3 relative">
              <div className="flex">
                <div className="ml-3">
                  <div className="text-sm font-semibold">
                    <span className="text-orange-300 inline-block min-w-16">
                      {`${score.accuracy.toFixed(2)}%`}
                    </span>
                    <span className="inline-block ml-3 min-w-16">
                      {`${round(score.pp * Math.pow(0.95, i), 0)}pp`}
                    </span>
                  </div>
                  <div>{`weighed ${round(Math.pow(0.95, i) * 100, 0)}%`}</div>
                </div>
              </div>
              <div className="absolute bottom-3 right-5 flex gap-4 items-center">
                <div className="font-bold text-base">
                  {`${round(score.pp, 0)}pp`}
                </div>
                <Checkbox
                  onCheckedChange={(_) =>
                    dispatch({ type: "flipID", id: score.id })
                  }
                />
                <InputField
                  label="Custom:"
                  className="w-20"
                  type="number"
                  disabled={!state.derankedIDs.has(score.id)}
                  defaultValue={round(state.customTopPlays.get(score.id)!, 0)}
                  onChange={(e) => {
                    dispatch({
                      type: "setCustomTopPlay",
                      id: score.id,
                      pp: parseFloat(e.target.value),
                    });
                  }}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
