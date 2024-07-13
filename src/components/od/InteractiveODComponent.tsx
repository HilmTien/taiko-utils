"use client";

import { Slider } from "@/components/ui/atoms/slider";
import React from "react";

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
    </>
  );
}
