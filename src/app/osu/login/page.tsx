"use server";

import { redirect } from "next/navigation";

export default async function Page() {
  const params = new URLSearchParams({
    client_id: process.env.OSU_CLIENT_ID!,
    redirect_uri: "http://localhost:3000/osu/auth",
    response_type: "code",
    scope: "public identify",
  });

  redirect(`https://osu.ppy.sh/oauth/authorize?${params.toString()}`);
}