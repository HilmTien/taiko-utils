"use client";

import { Button } from "@/components/ui/atoms/Button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/atoms/DropdownMenu";
import { Separator } from "@/components/ui/atoms/Separator";
import React from "react";
import { ODDispatchContext, ODStateContext } from "../ODState";

export default function InteractiveODSettings() {
  const state = React.useContext(ODStateContext);
  const dispatch = React.useContext(ODDispatchContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-10 w-14" variant="outline">
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <Separator />
        <DropdownMenuCheckboxItem
          checked={state.interactive.allowIllegalModCombos}
          onCheckedChange={(nextState) =>
            dispatch({
              type: "setInteractiveAllowIllegalModCombos",
              value: nextState,
            })
          }
        >
          Allow invalid mod combinations
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={state.interactive.useLinearOD}
          onCheckedChange={(nextState) =>
            dispatch({
              type: "setInteractiveUseLinearOD",
              value: nextState,
            })
          }
        >
          Use linear OD function (for DT / HT)
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
