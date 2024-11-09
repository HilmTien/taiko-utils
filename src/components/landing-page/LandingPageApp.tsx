import Image from "next/image";

import taiko from "public/landing-page/taiko.png";
import ODSection from "./sections/ODSection";
import PPSection from "./sections/PPSection";
import ProfileAdjustmentSection from "./sections/ProfileAdjustmentSection";

export default function LandingPageApp() {
  return (
    <>
      <main className="mt-10">
        <div className="place-items-center mb-52">
          <Image src={taiko} alt="tako" className="w-96" />
          <h1 className="text-6xl font-extrabold">Taiko Utils</h1>
          <p className="pt-5 text-lg text-violet-200 opacity-50">
            We strive to deliver useful utilities for osu! players that
            specialize in Taiko.
          </p>
        </div>
        <ODSection />
        <ProfileAdjustmentSection />
        <PPSection />
      </main>
    </>
  );
}
