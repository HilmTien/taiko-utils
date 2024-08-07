"use client";

import React from "react";
import ProfileAdjustmentList from "./ProfileAdjustmentList";
import { ProfileAdjustmentDispatchContext } from "./ProfileAdjustmentState";
import ProfileAdjustmentStats from "./ProfileAdjustmentStats";

interface ProfileAdjustmentAppProps {
  data: Array<any>;
}

export default function ProfileAdjustmentApp({
  data,
}: ProfileAdjustmentAppProps) {
  const dispatch = React.useContext(ProfileAdjustmentDispatchContext);

  React.useEffect(() => {
    dispatch({ type: "initTopPlays", data: data });
  }, []);

  return (
    <div className="flex gap-4">
      <ProfileAdjustmentList />
      <ProfileAdjustmentStats />
    </div>
  );
}
