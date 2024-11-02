"use client";

import PPDisplay from "./PPDisplay";
import PPInputCards from "./PPInputCards";

export default function PPApp() {
  return (
    <div className="flex flex-col w-full gap-4 items-center">
      <PPInputCards />
      <PPDisplay />
    </div>
  );
}
