import { SessionData, sessionOptions } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { Client } from "osu-web.js";

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.osuUser) {
    return Response.json({});
  }

  const client = new Client(session.osuUser.accessToken);
  const data = await client.users.getSelf({ urlParams: { mode: "taiko" } });

  return Response.json(data);
}
