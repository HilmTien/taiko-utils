"use client";

import { Button } from "@/components/ui/atoms/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/atoms/DropdownMenu";
import { Separator } from "@/components/ui/atoms/Separator";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

interface SettingsProps {
  children: ReactNode;
  side?: "left" | "top" | "right" | "bottom";
  align?: "center" | "end" | "start";
}

export default function Settings({ children, side, align }: SettingsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-8 w-8" aria-label="Settings">
          <Cog8ToothIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={side} align={align}>
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <Separator />
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
