import { SessionData, sessionOptions } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { Client } from "osu-web.js";

export async function GET(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.osuUser) {
    return Response.json({});
  }
  const searchParams = request.nextUrl.searchParams;

  const client = new Client(session.osuUser.accessToken);
  const data = await client.users.getUser(searchParams.get("id")!, {
    urlParams: { mode: "taiko" },
    query: { key: searchParams.get("key") === "username" ? "username" : "id" },
  });

  return Response.json(data);
}
