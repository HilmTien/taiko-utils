"use client";

import { Button } from "@/components/ui/atoms/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/atoms/DropdownMenu";
import { Separator } from "@/components/ui/atoms/Separator";
import { cn } from "@/lib/utils";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

interface SettingsProps {
  children: ReactNode;
  className?: string;
  side?: "left" | "top" | "right" | "bottom";
  align?: "center" | "end" | "start";
}

export default function Settings({
  children,
  className,
  side,
  align,
}: SettingsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={cn("h-8 w-8", className)} aria-label="Settings">
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
