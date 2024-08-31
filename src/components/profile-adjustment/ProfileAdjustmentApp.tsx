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
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center justify-between">
        <Button
          className="w-40"
          variant="default"
          size="default"
          onClick={() => {
            revalidatePathname(pathname).then((revalidated) => {
              if (revalidated) {
                location.reload();
              } else {
                // TODO: Add some toast notification later
              }
            });
          }}
        >
          Update User Best
        </Button>
        <ProfileAdjustmentSettings />
      </div>
      <div className="flex gap-4">
        <ProfileAdjustmentList />
        <ProfileAdjustmentStats bonusPP={bonusPP} />
      </div>
    </div>
  );
}
