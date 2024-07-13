"use client";

import InputField from "@/components/ui/molecules/InputField";
import React from "react";
import { ODDispatchContext, ODStateContext } from "./ODState";

export default function ODTableForm() {
  const state = React.useContext(ODStateContext);
  const dispatch = React.useContext(ODDispatchContext);

  return (
    <form noValidate className="flex flex-col gap-4">
      <InputField
        label={"Minimum OD:"}
        id={"min-od"}
        onChange={(e) =>
          dispatch({ type: "setTableMin", value: parseFloat(e.target.value) })
        }
        className="w-20"
        type="number"
        value={state.table.min}
        step={0.1}
      />
      <InputField
        label={"Maximum OD:"}
        id={"max-od"}
        onChange={(e) =>
          dispatch({ type: "setTableMax", value: parseFloat(e.target.value) })
        }
        className="w-20"
        type="number"
        value={state.table.max}
        step={0.1}
      />
      <InputField
        label={"Step:"}
        id={"step-od"}
        onChange={(e) =>
          dispatch({ type: "setTableStep", value: parseFloat(e.target.value) })
        }
        className="w-20"
        type="number"
        value={state.table.step}
        step={0.01}
      />
    </form>
  );
}
