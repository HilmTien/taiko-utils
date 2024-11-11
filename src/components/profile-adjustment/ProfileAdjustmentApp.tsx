"use client";

import { revalidatePathname } from "@/app/actions";
import { Score } from "@/lib/interfaces/osu-scores-best/interface";
import { fetcher } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { UserExtended } from "osu-web.js";
import React from "react";
import useSWRImmutable from "swr/immutable";
import { Button } from "../ui/atoms/Button";
import ProfileAdjustmentList from "./ProfileAdjustmentList";
import ProfileAdjustmentSettings from "./ProfileAdjustmentSettings";
import {
  ProfileAdjustmentDispatchContext,
  ProfileAdjustmentStateContext,
} from "./ProfileAdjustmentState";
import ProfileAdjustmentStats from "./ProfileAdjustmentStats";

interface ProfileAdjustmentAppProps {
  data: Score[];
  userId: string;
}

export default function ProfileAdjustmentApp({
  data,
  userId,
}: ProfileAdjustmentAppProps) {
  const state = React.useContext(ProfileAdjustmentStateContext);
  const dispatch = React.useContext(ProfileAdjustmentDispatchContext);

  React.useEffect(() => {
    dispatch({ type: "initTopPlays", data: data, userId: userId });
  }, [dispatch, data, userId]);

  const [bonusPP, setBonusPP] = React.useState(0);

  const resSelf = useSWRImmutable<UserExtended>(
    `/api/osu/get-player?id=${userId}`,
    fetcher
  );

  React.useEffect(() => {
    if (resSelf.data && Object.keys(resSelf.data).length !== 0) {
      const bonusPP =
        resSelf.data.statistics.pp -
        data.reduce((accumulator, score, i) => {
          return accumulator + score.pp * Math.pow(0.95, i);
        }, 0);
      setBonusPP(bonusPP);
    }
  }, [resSelf.data, data]);

  const pathname = usePathname();

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
