"use client";

import useSession from "@/lib/hooks/useSession";
import LoginButton from "./LoginButton";

export default function Navbar() {
  const { session } = useSession();

  if (session.osuUser) {
  }

  return (
    <header className="h-14 w-full top-0 bg-muted flex justify-between">
      <div className="ml-auto mr-auto w-[calc(100%-50px)] h-full max-w-screen-lg flex items-center">
        {session.osuUser ? (
          <div>{session.osuUser.accessToken}</div>
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
}
