"use client";

import { Button } from "@/components/ui/atoms/Button";
import useSession from "@/lib/hooks/useSession";
import { fetcher } from "@/lib/utils";
import { HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { UserExtended } from "osu-web.js";
import useSWR from "swr";
import LoginButton from "./LoginButton";

export default function Navbar() {
  const res = useSWR<UserExtended>("/api/osu/get-self", fetcher);
  const data = res.data;

  const { logout } = useSession();

  const onLogout = async () => {
    await logout();
    location.reload();
  };

  return (
    <header className="h-14 w-full top-0 bg-muted flex justify-between">
      <div className="ml-auto mr-auto w-[calc(100%-50px)] h-full max-w-screen-lg flex items-center">
        <Link href={"/"} className="w-10 h-10 mr-10">
          <HomeIcon />
        </Link>
        {data === undefined ? (
          <div>Loading...</div>
        ) : Object.keys(data).length !== 0 ? (
          <>
            <Image
              src={data.avatar_url}
              width={50}
              height={50}
              alt={"profile picture"}
            />
            <span className="ml-4 text-nowrap">{`Logged in as: ${data.username}`}</span>
            <Button
              className={"ml-4"}
              variant={"outline"}
              onClick={onLogout}
              size={"default"}
            >
              Log out
            </Button>
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
}
