"use client";

import { Slider } from "@/components/ui/atoms/slider";
import React from "react";

import { Input } from "@/components/ui/atoms/input";
import ModButton from "@/components/ui/molecules/ModButton";
import { applyMods, ODtoMS150, ODtoMS300 } from "@/lib/od/overallDifficulty";
import { ODDispatchContext, ODStateContext } from "../ODState";

export default function InteractiveODComponent() {
  let state = React.useContext(ODStateContext);
  let dispatch = React.useContext(ODDispatchContext);

  let { ms300, ms150, odMax300, odMax150 } = applyMods(
    state.interactive.od,
    state.interactive.activeMods
  );

  return (
    <>
      <Input
        type="number"
        className="w-20 mb-4"
        step={0.01}
        value={state.interactive.od}
        onChange={(e) =>
          dispatch({
            type: "setInteractiveOD",
            value: parseFloat(e.target.value),
          })
        }
      />
      <Slider
        value={[state.interactive.od]}
        onValueChange={(value) =>
          dispatch({ type: "setInteractiveOD", value: value[0] })
        }
        min={0}
        max={10}
        step={0.01}
      />
      <div className="w-auto flex justify-center pt-6 pb-2">
        <div className="grid grid-cols-2 gap-2 place-content-center place-items-center select-none">
          <ModButton mod="ez" />
          <ModButton mod="ht" />
          <ModButton mod="hr" />
          <ModButton mod="dt" />
        </div>
      </div>
      <div className="text-4xl text-center py-1">
        {`300: ±${ms300.toFixed(2)}ms`}
      </div>
      <div className="text-4xl text-center py-1">
        {`150: ±${ms150.toFixed(2)}ms`}
      </div>
      <div className="text-xl text-center py-1">
        {`Highest OD: ${odMax300.toFixed(2)} (±${ODtoMS300(odMax300)}ms)`}
      </div>
      <div className="text-xl text-center py-1">
        {`Highest OD (150): ${odMax150.toFixed(2)} (±${ODtoMS150(odMax150)}ms)`}
      </div>
    </>
  );
}
