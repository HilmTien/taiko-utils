import { Button } from "@/components/ui/atoms/Button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profileAdjustment from "public/landing-page/profile-adjustment.png";

export default function ProfileAdjustmentSection() {
  return (
    <section className="flex flex-col gap-2 bg-background pt-40 h-[500px] px-5">
      <div className="mx-auto mt-48">
        <h1 className="text-4xl font-extrabold pb-3">
          Explore your player profile.
        </h1>
        <p className="max-w-[700px] text-violet-200 mb-5">
          With the Profile Adjustment application, you can search up yourself or
          another osu! player. The application lets you modify the top plays and
          see how the performance points change and where they are placed on the
          global ranking.
        </p>
        <div className="flex flex-col w gap-5 lg:flex-row lg:gap-40 items-center lg:items-start">
          <Link href={"/profile-adjustment"} className="h-12 w-32">
            <Button variant={"default"} size={"default"} className="h-12 w-32">
              Explore now
              <ChevronRight />
            </Button>
          </Link>
          <Image
            src={profileAdjustment}
            alt="profile adjustment"
            className="rounded-lg w-[650px] border shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
