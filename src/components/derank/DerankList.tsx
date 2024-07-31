"use client";

import { Checkbox } from "@/components/ui/atoms/Checkbox";
import { round } from "@/lib/utils";
import React from "react";
import { DerankDispatchContext, DerankStateContext } from "./DerankState";

interface DerankListProps {
  data: Array<any>;
}

export default function DerankList({ data }: DerankListProps) {
  const state = React.useContext(DerankStateContext);
  const dispatch = React.useContext(DerankDispatchContext);

  return (
    <ul className="w-min">
      {data.map((score) => {
        const { artist, title } = score.beatmapset;

        return (
          <li key={score.id} className="flex relative rounded-xl">
            <div className="flex px-5 py-3 flex-1 items-center">
              <div className="flex flex-1 flex-col">
                <div className="self-start block text-sm font-semibold max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                  {`${artist} - ${title}`}
                </div>
                <div className="flex gap-4 mt-[2px] whitespace-nowrap text-xs">
                  {score.beatmap.version}
                </div>
              </div>
            </div>
            <div className="flex relative gap-2">
              <div className="px-1 py-2 flex items-center">
                {round(score.weight.pp, 0)}
              </div>
              <div className="px-1 py-2 flex items-center">
                {round(score.pp, 0)}
              </div>
            </div>
            <div className="px-3 py-3 flex items-center">
              <Checkbox
                onCheckedChange={(_) =>
                  dispatch({ type: "flipID", id: score.id })
                }
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
