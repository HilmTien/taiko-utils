"use client";

import { recalculate } from "@/lib/derank/derank";
import { round } from "@/lib/utils";
import React from "react";
import DerankList from "./DerankList";
import { DerankDispatchContext, DerankStateContext } from "./DerankState";

interface DerankAppProps {
  data: Array<any>;
}

export default function DerankApp({ data }: DerankAppProps) {
  const state = React.useContext(DerankStateContext);
  const dispatch = React.useContext(DerankDispatchContext);

  React.useEffect(() => {
    dispatch({ type: "initTopPlays", data: data });
  }, []);

  const pp = data.reduce((accumulator, score) => {
    return accumulator + score.weight.pp;
  }, 0);

  let ppDeranked = recalculate(state);

  return (
    <div className="flex">
      <DerankList />
      <div className="flex flex-col">
        <div>{`Normal (excl. bonus): ${round(pp, 0)}`}</div>
        <div>{`After changes: ${round(ppDeranked, 0)}`}</div>
      </div>
    </div>
  );
}
