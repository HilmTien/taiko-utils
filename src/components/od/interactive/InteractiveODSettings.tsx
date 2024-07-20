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
import { keepOpen } from "@/lib/utils";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ODDispatchContext, ODStateContext } from "../ODState";

export default function InteractiveODSettings() {
  const state = React.useContext(ODStateContext);
  const dispatch = React.useContext(ODDispatchContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-8 w-8">
          <Cog8ToothIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" align="start">
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
          onSelect={keepOpen}
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
          onSelect={keepOpen}
        >
          Use linear OD function (for DT / HT)
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
