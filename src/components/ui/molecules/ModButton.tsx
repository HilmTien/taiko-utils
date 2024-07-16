"use client";

import { ODDispatchContext, ODStateContext } from "@/components/od/ODState";
import { ODAdjustingMod } from "@/lib/modIcons";
import Image from "next/image";
import React from "react";
import { Button } from "../atoms/Button";

interface ModButtonProps {
  mod: ODAdjustingMod;
}

export default function ModButton({ mod }: ModButtonProps) {
  const state = React.useContext(ODStateContext);
  const dispatch = React.useContext(ODDispatchContext);

  return (
    <Button
      size={"icon"}
      className="w-[92px] h-[68px] transition grayscale aria-[checked=true]:grayscale-0 hover:scale-105 aria-[checked=true]:rotate-[4deg]"
      role="checkbox"
      aria-checked={state.interactive.activeMods[mod]}
      onClick={(_) => {
        dispatch({ type: "interactiveModChanged", mod: mod });
      }}
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
