import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/atoms/Tooltip";
import Image from "next/image";

import Link from "next/link";
import taiko from "public/landing-page/taiko.png";
import tien from "public/profile-pics/hiimtien.png";
import mrv from "public/profile-pics/mrv.png";
import tony from "public/profile-pics/tonyworep.png";

export default function FrontSection() {
  return (
    <section className="flex flex-col justify-center items-center h-[550px] px-5">
      <Image src={taiko} alt="tako" className="w-96" />
      <h1 className="text-6xl font-extrabold text-center">Taiko Utils</h1>
      <p className="pt-5 text-lg text-center text-violet-200 opacity-50">
        We strive to deliver useful utilities for osu! players that specialize
        in Taiko.
      </p>
      <div className="flex gap-5 mt-24">
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <div className="transform -rotate-6 hover:scale-110 hover:rotate-0 duration-100">
              <Link href="https://osu.ppy.sh/users/16204122" target="_blank">
                <Image src={tony} alt="tonyworep" />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>TonyWorep</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <div className="transform translate-y-5 hover:scale-150 hover:rotate-0 duration-100">
              <Link href="https://osu.ppy.sh/users/8631719" target="_blank">
                <Image src={tien} alt="hiimtien" width={193} />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent className="-mb-3">
            <p>Defectum</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <div className="transform rotate-6 hover:scale-110 hover:rotate-0 duration-100">
              <Link href="https://osu.ppy.sh/users/12513942" target="_blank">
                <Image src={mrv} alt="mrv" width={193} />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent className="mb-2">
            <p>mrv</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </section>
  );
}
