import useDebounce from "@/lib/hooks/useDebounce";
import { PlayersBackendPlayerData } from "@/lib/interfaces/players-backend/interface";
import { recalculate } from "@/lib/profile-adjustment/profileAdjustment";
import { fetcher, round } from "@/lib/utils";
import { UserExtended } from "osu-web.js";
import React from "react";
import useSWRImmutable from "swr/immutable";
import { ProfileAdjustmentStateContext } from "./ProfileAdjustmentState";

interface ProfileAdjustmentStatsProps {
  bonusPP: number;
}

export default function ProfileAdjustmentStats({
  bonusPP,
}: ProfileAdjustmentStatsProps) {
  const state = React.useContext(ProfileAdjustmentStateContext);

  const pp =
    state.topPlays.reduce((accumulator, score, i) => {
      return accumulator + score.pp * Math.pow(0.95, i);
    }, 0) + bonusPP;

  const ppAdjusted =
    recalculate(state.topPlays, state.customTopPlays, state.customIDs) +
    bonusPP;

  const ppDiff = round(ppAdjusted, 0) - round(pp, 0);

  const debouncedPPA = useDebounce(ppAdjusted, 500);

  const { data: playerData } = useSWRImmutable<PlayersBackendPlayerData>(
    () =>
      debouncedPPA
        ? `/api/players-backend/pp?pp=${debouncedPPA.toFixed(0)}`
        : null,
    fetcher
  );

  const { data: playerOsuData } = useSWRImmutable<UserExtended>(
    playerData === undefined
      ? null
      : `/api/osu/get-player?id=${playerData.data.user_id}`,
    fetcher
  );

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
          <div className="text-2xl font-normal">
            {round(pp, 0)}
            <small>pp</small>
          </div>
        </div>
        <div className="flex flex-col min-w-28">
          <div className="text-xs font-semibold">{"Custom"}</div>
          <div className="text-2xl font-normal">
            {round(ppAdjusted, 0)}
            <small>pp</small>
          </div>
        </div>
        <PPDiff />
      </div>
      <div className="flex justify-center text-xs italic mt-1">
        {bonusPP > 0 ? "pp includes bonus pp" : "pp excludes bonus pp"}
      </div>
      <div className="flex justify-center mt-2 text-center">
        The player with the current custom pp is: {playerData?.data.username}{" "}
        {playerOsuData === undefined ||
        Object.keys(playerOsuData).length === 0 ? (
          <></>
        ) : (
          `(#${playerOsuData.statistics.global_rank})`
        )}
      </div>
    </div>
  );
}
