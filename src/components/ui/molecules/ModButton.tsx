"use client";

import { Mod, modNames } from "@/lib/modIcons";
import Image from "next/image";
import React from "react";
import { Button } from "../atoms/Button";

interface ModButtonProps {
  mod: Mod;
  checked?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ModButton({ mod, checked, onClick }: ModButtonProps) {
  return (
    <Button
      size={"icon"}
      className="w-[92px] h-[68px] transition grayscale aria-[checked=true]:grayscale-0 hover:scale-105 aria-[checked=true]:rotate-[4deg]"
      role="checkbox"
      aria-checked={checked}
      onClick={onClick}
      title={modNames[mod]}
    >
      <Image
        src={`/mod-badges/${mod}.png`}
        width={92}
        height={68}
        alt={mod}
        draggable={false}
        priority={true}
        className="h-full w-full"
      />
    </Button>
  );
}
