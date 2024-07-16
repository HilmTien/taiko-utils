import { Slider } from "@/components/ui/atoms/Slider";
import InputField from "@/components/ui/molecules/InputField";
import React from "react";
import { ODDispatchContext, ODStateContext } from "../ODState";

export default function InteractiveODForm() {
  let state = React.useContext(ODStateContext);
  let dispatch = React.useContext(ODDispatchContext);

  return (
    <>
      <div className="flex justify-between">
        <InputField
          label="OD (without mods):"
          id="set-od"
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
      </div>
      <Slider
        value={[state.interactive.od]}
        onValueChange={(value) =>
          dispatch({ type: "setInteractiveOD", value: value[0] })
        }
        min={0}
        max={10}
        step={0.01}
      />
    </>
  );
}
