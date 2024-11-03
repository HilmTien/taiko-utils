"use client";

import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/atoms/DropdownMenu";
import { PPCalcMethod } from "@/lib/pp/ppCalculation";
import { keepOpen } from "@/lib/utils";
import React from "react";
import Settings from "../ui/molecules/Settings";
import { PPDispatchContext, PPStateContext } from "./PPState";

export default function PPSettings() {
  const state = React.useContext(PPStateContext);
  const dispatch = React.useContext(PPDispatchContext);

  return (
    <Settings side={"left"} align={"start"} className="absolute right-0">
      <DropdownMenuRadioGroup
        value={state.ppCalcMethod}
        onValueChange={(nextValue) =>
          dispatch({
            type: "setPPCalcMethod",
            method: nextValue as PPCalcMethod,
          })
        }
      >
        <DropdownMenuLabel>PP Calculation Method</DropdownMenuLabel>
        <DropdownMenuRadioItem value={"2024"} onSelect={keepOpen}>
          2024 (statistical acc)
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value={"2022"} onSelect={keepOpen}>
          2022
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </Settings>
  );
}
