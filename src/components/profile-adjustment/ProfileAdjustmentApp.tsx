"use client";

import { recalculate } from "@/lib/profile-adjustment/profileAdjustment";
import { round } from "@/lib/utils";
import React from "react";
import ProfileAdjustmentList from "./ProfileAdjustmentList";
import {
  ProfileAdjustmentDispatchContext,
  ProfileAdjustmentStateContext,
} from "./ProfileAdjustmentState";

interface ProfileAdjustmentAppProps {
  data: Array<any>;
}

export default function ProfileAdjustmentApp({
  data,
}: ProfileAdjustmentAppProps) {
  const state = React.useContext(ProfileAdjustmentStateContext);
  const dispatch = React.useContext(ProfileAdjustmentDispatchContext);

  React.useEffect(() => {
    dispatch({ type: "initTopPlays", data: data });
  }, []);

  const pp = data.reduce((accumulator, score) => {
    return accumulator + score.weight.pp;
  }, 0);

  let ppProfileAdjustmented = recalculate(state);

  return (
    <div className="flex">
      <ProfileAdjustmentList />
      <div className="flex flex-col">
        <div>{`Normal (excl. bonus): ${round(pp, 0)}`}</div>
        <div>{`After changes: ${round(ppProfileAdjustmented, 0)}`}</div>
      </div>
    </div>
  );
}
