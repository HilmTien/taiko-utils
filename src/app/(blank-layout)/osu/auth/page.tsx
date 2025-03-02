"use server";

import AuthClient from "@/components/auth-client/AuthClient";
import { OsuToken } from "@/lib/session";
import { getData } from "@/lib/utils";
import { headers } from "next/headers";

export default async function Page({ searchParams }: { searchParams: any }) {
  const host = headers().get("host");

  const code = searchParams.code as string | undefined;
  if (!code) {
    return (
      <div>
        No code was returned for the application to use. osu! might be trolling
        here :( Or you clicked the cancel button grrrrr
      </div>
    );
  }

  const reqHeaders = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const body = `client_id=${process.env.OSU_CLIENT_ID}&client_secret=${
    process.env.OSU_CLIENT_SECRET
  }&code=${code}&grant_type=authorization_code&redirect_uri=${
    process.env.NODE_ENV === "production" ? "https" : "http"
  }://${host}/osu/auth`;

  const token = (await getData("https://osu.ppy.sh/oauth/token", {
    method: "POST",
    headers: reqHeaders,
    body: body,
  })) as OsuToken;

  return <AuthClient token={token} />;
}
