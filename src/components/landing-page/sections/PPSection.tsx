import { Button } from "@/components/ui/atoms/Button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import pp from "public/landing-page/pp.png";

export default function PPSection() {
  return (
    <section className="flex flex-col gap-2 bg-secondary pt-40 h-[600px] mt-44 px-5">
      <div className="mx-auto mt-28">
        <h1 className="text-4xl font-extrabold pb-3">Easy to calculate PP.</h1>
        <p className="max-w-[700px] text-violet-200 mb-5">
          The PP Application makes calculating pp much easier. By inputting the
          beatmap&apos;s stats, your 100s and misses, and your mod combination,
          the PP will be calculated instantly. Due to the recent PP rework, the
          application is both compatible for the current (PPv4) and the old PP
          calculation method (PPv3).
        </p>
        <div className="flex gap-32">
          <Link href={"/pp"} className="h-12 w-32">
            <Button variant={"outline"} size={"default"} className="h-12 w-36">
              Calculate here
              <ChevronRight />
            </Button>
          </Link>
          <Image
            src={pp}
            alt="pp"
            className="rounded-lg border shadow-lg w-[700px]"
          />
        </div>
      </div>
    </section>
  );
}
