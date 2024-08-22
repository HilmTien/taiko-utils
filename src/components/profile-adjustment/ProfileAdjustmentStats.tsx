import { recalculate } from "@/lib/profile-adjustment/profileAdjustment";
import { fetcher, round } from "@/lib/utils";
import React from "react";
import useSWR from "swr";
import { ProfileAdjustmentStateContext } from "./ProfileAdjustmentState";

export default function ProfileAdjustmentStats() {
  const state = React.useContext(ProfileAdjustmentStateContext);

  const pp = state.topPlays.reduce((accumulator, score, i) => {
    return accumulator + score.pp * Math.pow(0.95, i);
  }, 0);

  const ppAdjusted = recalculate(state);

  const ppDiff = round(ppAdjusted, 0) - round(pp, 0);

  const { data } = useSWR("/api/players-backend", fetcher);
  console.log(data);

  function PPDiff() {
    let color, prefix;

    if (ppDiff > 0) {
      color = "text-green-500";
      prefix = "+";
    } else if (ppDiff == 0) {
      color = "";
      prefix = "";
    } else {
      color = "text-red-500";
      prefix = "";
    }

    return (
      <div className={`flex items-center mt-4 mr-1 ${color}`}>
        {`${prefix}${ppDiff}`}
        <small>pp</small>
      </div>
    );
  }

  return (
    <div className="sticky top-4 h-screen w-full">
      <div className="flex gap-1 justify-center">
        <div className="flex flex-col min-w-28">
          <div className="text-xs font-semibold">{"Live"}</div>
          <div className="text-2xl font-light">
            {round(pp, 0)}
            <small>pp</small>
          </div>
        </div>
        <div className="flex flex-col min-w-28">
          <div className="text-xs font-semibold">{"Custom"}</div>
          <div className="text-2xl font-light">
            {round(ppAdjusted, 0)}
            <small>pp</small>
          </div>
        </div>
        <PPDiff />
      </div>
      <div className="flex justify-center text-xs italic mt-1">
        {"pp excludes bonus pp"}
      </div>
    </div>
  );
}
