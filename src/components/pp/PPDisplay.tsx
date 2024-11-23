import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/Card";
import { calcPP } from "@/lib/pp/ppCalculation";
import { round } from "@/lib/utils";
import React from "react";
import { PPStateContext } from "./PPState";

export default function PPDisplay() {
  const state = React.useContext(PPStateContext);

  const pp = round(
    calcPP(state.ppCalcMethod)(
      state.mapStats.sr,
      state.mapStats.od,
      state.mapStats.maxCombo,
      state.accuracy.good,
      state.accuracy.miss,
      state.selectedMods
    )
  );

  const maxPP = round(
    calcPP(state.ppCalcMethod)(
      state.mapStats.sr,
      state.mapStats.od,
      state.mapStats.maxCombo,
      0,
      0,
      state.selectedMods
    )
  );

  const diffPP = round(pp - maxPP);

  return (
    <Card className="w-[310px] min-[550px]:w-[550px]">
      <CardHeader className="items-center">
        <CardTitle className="text-4xl">{pp}pp</CardTitle>
        <CardDescription className="self-end">
          Max: {maxPP}pp (<span className="text-red-500">{diffPP}</span>)
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
