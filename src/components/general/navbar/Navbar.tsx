"use client";

import { NavigationMenu } from "@/components/ui/atoms/NavigationMenu";
import useSession from "@/lib/hooks/useSession";
import { fetcher } from "@/lib/utils";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { UserExtended } from "osu-web.js";
import useSWR from "swr";
import NavApplications from "./nav-lists/NavApplications";
import ProfileHandler from "./profile/ProfileHandler";

export default function Navbar() {
  const res = useSWR<UserExtended>("/api/osu/get-self", fetcher);
  const data = res.data;

  const { logout } = useSession();

  const onLogout = async () => {
    await logout();
    location.reload();
  };

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
          <h1 className="font-mono font-extrabold text-nowrap whitespace-nowrap hidden sm:block">
            TAIKO UTILS
          </h1>
        </Link>
        <NavigationMenu>
          <NavApplications />
        </NavigationMenu>
        <ProfileHandler />
      </div>
    </header>
  );
}
