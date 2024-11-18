"use client";

import useSession from "@/lib/hooks/useSession";
import { makeOsuUserFromToken, OsuToken } from "@/lib/session";
import React from "react";

export default function AuthClient({ token }: { token: OsuToken }) {
  const { login } = useSession();

  React.useEffect(() => {
    login(token, {
      optimisticData: {
        isLoggedInOsu: true,
        osuUser: makeOsuUserFromToken(token),
      },
    }).then((_) => window.close());
  }, [login, token]);

  return <div />;
}
