"use client";

import { Slider } from "@/components/ui/atoms/slider";
import React from "react";

import ModButton from "@/components/ui/molecules/ModButton";

export default function InteractiveODComponent() {
  let [od, setOD] = React.useState([5]);

  return (
    <>
      <p>{od}</p>
      <Slider
        value={od}
        onValueChange={(value) => setOD(value)}
        min={0}
        max={10}
        step={0.01}
      />
      <div className="w-auto flex justify-center pt-6">
        <div className="grid grid-cols-2 gap-2 place-content-center place-items-center select-none">
          <ModButton mod="ez" />
          <ModButton mod="ht" />
          <ModButton mod="hr" />
          <ModButton mod="dt" />
        </div>
      </div>
    </>
  );
}
