"use client";

import PPDisplay from "./PPDisplay";
import PPInputCards from "./PPInputCards";
import PPSettings from "./PPSettings";

export default function PPApp() {
  return (
    <div className="flex flex-col w-full gap-4 items-center relative">
      <div className="w-full flex justify-center">
        <PPInputCards />
        <PPSettings />
      </div>
      <PPDisplay />
    </div>
  );
}
