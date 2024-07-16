"use client";

import InteractiveODCalc from "./InteractiveODCalc";
import InteractiveODForm from "./InteractiveODForm";
import InteractiveODModSelection from "./InteractiveODModSelection";

export default function InteractiveODComponent() {
  return (
    <div className="max-w-screen-lg w-full">
      <InteractiveODForm />
      <InteractiveODModSelection />
      <InteractiveODCalc />
    </div>
  );
}
