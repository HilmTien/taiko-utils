import { Separator } from "@/components/ui/atoms/Separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/atoms/Sheet";
import {
  Bars3Icon,
  CalculatorIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import ProfileHandler from "./profile/ProfileHandler";

export default function NavMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Bars3Icon className="w-8 cursor-pointer rounded-full hover:bg-background duration-150 sm:hidden" />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <div>
          <ProfileHandler isMobile={true} />
        </div>
        <Separator className="my-3" />
        <Link
          href="/"
          className="flex gap-3 p-3 rounded-md opacity-75 hover:no-underline hover:bg-secondary hover:opacity-100 duration-150 place-items-center"
          onClick={() => setOpen(false)}
        >
          <HomeIcon className="h-7" />
          <p className="text-xl">Home</p>
        </Link>
        <div className="flex flex-col">
          <Link
            href="/od"
            className="flex gap-3 p-3 rounded-md opacity-75 hover:no-underline hover:bg-secondary hover:opacity-100 duration-150 place-items-center"
            onClick={() => setOpen(false)}
          >
            <PresentationChartLineIcon className="h-7" />
            <p className="text-xl">OD App</p>
          </Link>
          <Link
            href="/profile-adjustment"
            className="flex gap-3 p-3 rounded-md opacity-75 hover:no-underline hover:bg-secondary hover:opacity-100 duration-150 place-items-center"
            onClick={() => setOpen(false)}
          >
            <MagnifyingGlassIcon className="h-7" />
            <p className="text-xl">Profile Adjustment</p>
          </Link>
          <Link
            href="/pp"
            className="flex gap-3 p-3 rounded-md opacity-75 hover:no-underline hover:bg-secondary hover:opacity-100 duration-150 place-items-center"
            onClick={() => setOpen(false)}
          >
            <CalculatorIcon className="h-7" />
            <p className="text-xl">PP App</p>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
