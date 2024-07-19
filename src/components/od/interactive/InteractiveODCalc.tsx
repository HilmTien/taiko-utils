import { applyMods, ODtoMS150, ODtoMS300 } from "@/lib/od/overallDifficulty";
import React from "react";
import { ODStateContext } from "../ODState";

export default function InteractiveODCalc() {
  let state = React.useContext(ODStateContext);

  let { ms300, ms150, odMax300, odMax150 } = applyMods(
    state.interactive.od,
    state.interactive.activeMods,
    state.interactive.useLinearOD
  );

  return (
    <>
      <div className="text-4xl text-center py-1">
        {`300: ±${ms300.toFixed(2)}ms`}
      </div>
      <div className="text-4xl text-center py-1">
        {`150: ±${ms150.toFixed(2)}ms`}
      </div>
      <div className="text-xl text-center py-1">
        {`Highest OD: ${odMax300.toFixed(2)} (±${ODtoMS300(odMax300)}ms)`}
      </div>
      <div className="text-lg text-center py-1">
        {`Highest OD (150): ${odMax150.toFixed(2)} (±${ODtoMS150(odMax150)}ms)`}
      </div>
    </>
  );
}
