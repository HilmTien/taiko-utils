"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const host = headers().get("host");

  const params = new URLSearchParams({
    client_id: process.env.OSU_CLIENT_ID!,
    redirect_uri: `${
      process.env.NODE_ENV === "production" ? "https" : "http"
    }://${host}/osu/auth`,
    response_type: "code",
    scope: "public identify",
  });

  redirect(`https://osu.ppy.sh/oauth/authorize?${params.toString()}`);
}
