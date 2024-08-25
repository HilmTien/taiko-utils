"use client";

import { revalidatePathname } from "@/app/actions";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/atoms/Button";
import ProfileAdjustmentList from "./ProfileAdjustmentList";
import { ProfileAdjustmentDispatchContext } from "./ProfileAdjustmentState";
import ProfileAdjustmentStats from "./ProfileAdjustmentStats";

interface ProfileAdjustmentAppProps {
  data: Array<any>;
  userId: string;
}

export default function ProfileAdjustmentApp({
  data,
  userId,
}: ProfileAdjustmentAppProps) {
  const dispatch = React.useContext(ProfileAdjustmentDispatchContext);

  React.useEffect(() => {
    dispatch({ type: "initTopPlays", data: data, userId: userId });
  }, []);

  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      <Button
        className="w-40"
        variant="default"
        size="default"
        onClick={() => {
          revalidatePathname(pathname).then((revalidated) => {
            if (revalidated) {
              // location.reload();
            } else {
              // TODO: Add some toast notification later
            }
          });
        }}
      >
        Update User Best
      </Button>
      <div className="flex gap-4">
        <ProfileAdjustmentList />
        <ProfileAdjustmentStats />
      </div>
    </div>
  );
}
