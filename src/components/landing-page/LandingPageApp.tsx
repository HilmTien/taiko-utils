"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import odGraph from "public/od-graph.png";
import pp from "public/pp.png";
import profileAdjustment from "public/profile-adjustment.png";
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

      <div className="flex flex-col gap-2 bg-secondary pl-[15%] pt-40 h-[500px] items-center">
        <div className="mr-[30%]">
          <h1 className="text-4xl font-extrabold pb-3">OD after mod change?</h1>
          <p className="max-w-[700px] text-violet-200 mb-5">
            The OD application gives you the ability to find the correct
            "Overall Difficulty" after putting on mods. This is especially
            helpful for mods like Double Time or Half Time, where the actual OD
            is not shown. The application also includes a table and a graph to
            give you a visualization as well.
          </p>
          <div className="flex gap-64">
            <a href={"/od"} className="h-12 w-32">
              <Button
                variant={"outline"}
                size={"default"}
                className="h-12 w-32"
              >
                Try OD App
                <ChevronRight />
              </Button>
            </a>
            <Image
              src={odGraph}
              alt="od graph"
              className="rounded-lg w-[500px] border shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-background pl-[15%] pt-40 h-[500px] items-center">
        <div className="mr-[30%] mt-48">
          <h1 className="text-4xl font-extrabold pb-3">
            Explore your player profile.
          </h1>
          <p className="max-w-[700px] text-violet-200 mb-5">
            With the Profile Adjustment application, you can search up yourself
            or another osu! player. The application lets you modify the top
            plays and see how the performance points change and where they are
            placed on the global ranking.
          </p>
          <div className="flex gap-40">
            <a href={"/profile-adjustment"} className="h-12 w-32">
              <Button
                variant={"default"}
                size={"default"}
                className="h-12 w-32"
              >
                Use it now
                <ChevronRight />
              </Button>
            </a>
            <Image
              src={profileAdjustment}
              alt="profile adjustment"
              className="rounded-lg w-[650px] border shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-secondary pl-[15%] pt-40 h-[600px] items-center mt-44">
        <div className="mr-[30%] mt-28">
          <h1 className="text-4xl font-extrabold pb-3">
            Easy to calculate PP.
          </h1>
          <p className="max-w-[700px] text-violet-200 mb-5">
            The PP Application makes calculating pp much easier. By inputting
            the beatmap's stats, your 100s and misses, and your mod combination,
            the PP will be calculated instantly. Due to the recent PP rework,
            the application is both compatible for the current (PPv4) and the
            old PP calculation method (PPv3).
          </p>
          <div className="flex gap-32">
            <a href={"/pp"} className="h-12 w-32">
              <Button
                variant={"outline"}
                size={"default"}
                className="h-12 w-36"
              >
                Calculate here
                <ChevronRight />
              </Button>
            </a>
            <Image src={pp} alt="pp" className="rounded-lg border shadow-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
