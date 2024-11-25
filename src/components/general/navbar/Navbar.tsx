"use client";

import { NavigationMenu } from "@/components/ui/atoms/NavigationMenu";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavApplications from "./nav-lists/NavApplications";
import NavMenu from "./NavMenu";
import ProfileHandler from "./profile/ProfileHandler";

export default function Navbar() {
  return (
    <header className="h-14 w-full top-0 bg-navbar flex justify-between">
      <div className="mx-auto w-[calc(100%-50px)] h-full max-w-screen-lg flex items-center gap-5">
        <Link
          href={"/"}
          className="flex items-center mr-auto hover:no-underline"
        >
          <div className="h-10 w-10 mr-2">
            <HomeIcon />
          </div>
          <h1 className="font-mono font-extrabold text-nowrap whitespace-nowrap">
            TAIKO UTILS
          </h1>
        </Link>
        <NavigationMenu>
          <NavApplications />
        </NavigationMenu>
        <ProfileHandler isMobile={false} />
        <NavMenu />
      </div>
    </header>
  );
}
