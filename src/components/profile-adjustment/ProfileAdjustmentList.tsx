"use client";

import { Checkbox } from "@/components/ui/atoms/Checkbox";
import { round } from "@/lib/utils";
import React from "react";
import { Input } from "../ui/atoms/Input";
import {
  ProfileAdjustmentDispatchContext,
  ProfileAdjustmentStateContext,
} from "./ProfileAdjustmentState";

export default function ProfileAdjustmentList() {
  const state = React.useContext(ProfileAdjustmentStateContext);
  const dispatch = React.useContext(ProfileAdjustmentDispatchContext);

  return (
    <ul className="max-w-screen-md min-w-[33rem] w-full relative leading-tight">
      {state.topPlays.map((score, i) => {
        const { artist, title, difficulty } = score.beatmapDetails;
        const { accuracy, great, ok, miss, combo, maxCombo } = score.statistics;

        return (
          <li
            key={score.id}
            className="relative rounded-xl my-1 text-[12px] min-h-16 bg-secondary "
          >
            <div className="px-5 py-3 rounded-xl min-w-0 flex items-center border-b-4 border-solid border-primary">
              <div className="flex flex-1 flex-col min-w-0">
                <a
                  href={score.beatmapDetails.url}
                  target="_blank"
                  className="self-start block text-[14px] font-semibold max-w-full overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {title}
                  <small className="block text-[87%]">{artist}</small>
                </a>
                <div className="flex gap-4 mt-1 whitespace-nowrap">
                  <span className="text-orange-300 overflow-hidden text-ellipsis whitespace-nowrap">
                    {difficulty}
                  </span>
                  <span className="text-primary flex-none">
                    <time dateTime={score.timestamp.toJSON()}>
                      {score.timestamp.toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZoneName: "shortOffset",
                      })}
                    </time>
                  </span>
                  <span className="ml-auto italic">
                    {score.statistics.mods.difference(state.excludeCL)}
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 py-3 relative">
              <div className="flex">
                <div>
                  <div className="text-[14px] font-semibold">
                    <span className="text-orange-300 inline-block min-w-24">
                      {`${accuracy.toFixed(2)}%`}
                    </span>
                    <span className="inline-block min-w-20 text-primary">
                      {`${round(score.pp * Math.pow(0.95, i), 0)}pp`}
                    </span>
                  </div>
                  <div>
                    <span className="inline-block min-w-24">
                      {"weighed "}
                      <span className="text-primary font-semibold">
                        {round(Math.pow(0.95, i) * 100, 0)}%
                      </span>
                    </span>
                    <span className="inline-block min-w-32 font-semibold">
                      <span className="text-blue-500">{great}</span>
                      <span className="font-normal">{" / "}</span>
                      <span className="text-green-500">{ok}</span>
                      <span className="font-normal">{" / "}</span>
                      <span className="text-red-500">{miss}</span>
                      {combo == maxCombo ? (
                        <span>{" FC"}</span>
                      ) : (
                        <span className="font-normal">{` (${combo}x / ${maxCombo}x)`}</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 right-5 flex gap-3 items-center">
                <div className="font-bold text-[16px]">
                  {`${round(score.pp, 0)}pp`}
                </div>
                <label className="text-nowrap flex flex-col gap-0.5 items-center justify-end">
                  Custom
                  <Checkbox
                    onCheckedChange={(_) =>
                      dispatch({ type: "flipID", id: score.id })
                    }
                  />
                </label>
                <Input
                  className="w-16"
                  type="number"
                  disabled={!state.customIDs.has(score.id)}
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
