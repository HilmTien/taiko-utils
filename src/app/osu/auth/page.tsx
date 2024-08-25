"use server";

import AuthClient from "@/components/auth-client/AuthClient";
import { OsuToken } from "@/lib/session";
import { getData } from "@/lib/utils";

export default async function Page({ searchParams }: { searchParams: any }) {
  const code = searchParams.code as string | undefined;
  if (!code) {
    return (
      <div>
        No code was returned for the application to use. osu! might be trolling
        here :( Or you clicked the cancel button grrrrr
      </div>
    );
  }

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const body = `client_id=${process.env.OSU_CLIENT_ID}&client_secret=${process.env.OSU_CLIENT_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=http://localhost:3000/osu/auth`;

  const token = (await getData("https://osu.ppy.sh/oauth/token", {
    method: "POST",
    headers: headers,
    body: body,
  })) as OsuToken;

  return <AuthClient token={token} />;
}
