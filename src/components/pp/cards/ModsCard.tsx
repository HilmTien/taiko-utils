import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/Card";
import ModButton from "@/components/ui/molecules/ModButton";
import React from "react";
import { PPDispatchContext, PPStateContext } from "../PPState";

export default function ModsCard() {
  const state = React.useContext(PPStateContext);
  const dispatch = React.useContext(PPDispatchContext);

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="flex justify-center">Mods</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="grid grid-cols-3 place-items-center select-none gap-2">
          <ModButton
            mod="hd"
            checked={state.selectedMods.hd}
            onClick={() => dispatch({ type: "modSelected", mod: "hd" })}
          ></ModButton>
          <ModButton
            mod="hr"
            checked={state.selectedMods.hr}
            onClick={() => dispatch({ type: "modSelected", mod: "hr" })}
          ></ModButton>
          <ModButton
            mod="ez"
            checked={state.selectedMods.ez}
            onClick={() => dispatch({ type: "modSelected", mod: "ez" })}
          ></ModButton>
          <ModButton
            mod="dt"
            checked={state.selectedMods.dt}
            onClick={() => dispatch({ type: "modSelected", mod: "dt" })}
          ></ModButton>
          <ModButton
            mod="fl"
            checked={state.selectedMods.fl}
            onClick={() => dispatch({ type: "modSelected", mod: "fl" })}
          ></ModButton>
          <ModButton
            mod="ht"
            checked={state.selectedMods.ht}
            onClick={() => dispatch({ type: "modSelected", mod: "ht" })}
          ></ModButton>
        </div>
      </CardContent>
    </Card>
  );
}
