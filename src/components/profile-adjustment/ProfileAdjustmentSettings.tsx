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
import {
  ProfileAdjustmentDispatchContext,
  ProfileAdjustmentStateContext,
} from "./ProfileAdjustmentState";

export default function ProfileAdjustmentSettings() {
  const state = React.useContext(ProfileAdjustmentStateContext);
  const dispatch = React.useContext(ProfileAdjustmentDispatchContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-8 w-8" aria-label="Settings">
          <Cog8ToothIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" align="start">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <Separator />
        <DropdownMenuCheckboxItem
          checked={state.excludeCL.size > 0}
          onCheckedChange={(_) =>
            dispatch({
              type: "setExcludeCL",
            })
          }
          onSelect={keepOpen}
        >
          Exclude CL from mods
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
