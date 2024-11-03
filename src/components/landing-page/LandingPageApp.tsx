"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import odGraph from "public/od-graph.png";
import taiko from "public/taiko.png";
import { Button } from "../ui/atoms/Button";

export default function LandingPageApp() {
  return (
    <main className="mt-10">
      <div className="place-items-center mb-52">
        <Image src={taiko} alt="tako" className="w-96" />
        <h1 className="text-6xl font-extrabold">Taiko Utils</h1>
        <p className="pt-5 text-lg text-violet-200 opacity-50">
          We strive to deliver useful utilities for osu! players that specialize
          in Taiko.
        </p>
      </div>

      <div className="flex flex-col gap-2 bg-secondary pl-[15%] pt-40 h-[500px]">
        <h1 className="text-4xl font-extrabold">OD after mod change?</h1>
        <p className="max-w-[700px] text-violet-200 mb-5">
          The OD application gives you the ability to find the correct "Overall
          Difficulty" after putting on mods. This is especially helpful for mods
          like Double Time or Half Time, where the actual OD is not shown. The
          application also includes a table and a graph to give you a
          visualization as well.
        </p>
        <div className="flex gap-64">
        <a href={"/od"} className="h-12 w-32">
          <Button variant={"outline"} size={"default"} className="h-12 w-32">
            Try OD App
            <ChevronRight />
          </Button>
        </a>
        <Image src={odGraph} alt="od graph" className="rounded-lg w-[500px] border shadow-2xl"/>
        </div>
      </div>
    </main>
  );
}
