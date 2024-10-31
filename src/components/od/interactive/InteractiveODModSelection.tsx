import ModButton from "@/components/ui/molecules/ModButton";
import React from "react";
import { ODDispatchContext, ODStateContext } from "../ODState";

export default function InteractiveODModSelection() {
  const state = React.useContext(ODStateContext);
  const dispatch = React.useContext(ODDispatchContext);

  return (
    <div className="w-auto flex justify-center py-2">
      <div className="grid grid-cols-2 gap-2 place-content-center place-items-center select-none">
        <ModButton
          mod="ez"
          checked={state.interactive.activeMods["ez"]}
          onClick={(_) => {
            dispatch({ type: "interactiveModChanged", mod: "ez" });
          }}
        />
        <ModButton
          mod="ht"
          checked={state.interactive.activeMods["ht"]}
          onClick={(_) => {
            dispatch({ type: "interactiveModChanged", mod: "ht" });
          }}
        />
        <ModButton
          mod="hr"
          checked={state.interactive.activeMods["hr"]}
          onClick={(_) => {
            dispatch({ type: "interactiveModChanged", mod: "hr" });
          }}
        />
        <ModButton
          mod="dt"
          checked={state.interactive.activeMods["dt"]}
          onClick={(_) => {
            dispatch({ type: "interactiveModChanged", mod: "dt" });
          }}
        />
      </div>
    </div>
  );
}
