import {
  defaultSession,
  makeOsuUserFromToken,
  OsuToken,
  SessionData,
  sessionOptions,
} from "@/lib/session";
import { getData } from "@/lib/utils";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// login
export async function POST(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  const token = (await request.json()) as OsuToken;

  session.osuUser = makeOsuUserFromToken(token);
  await session.save();

  return Response.json(session);
}

// export async function PATCH() {
//   const session = await getIronSession<SessionData>(cookies(), sessionOptions);

//   session.counter++;
//   session.updateConfig({
//     ...sessionOptions,
//     cookieOptions: {
//       ...sessionOptions.cookieOptions,
//       expires: new Date("2024-12-27T00:00:00.000Z"),
//       maxAge: undefined,
//     },
//   });
//   await session.save();

//   return Response.json(session);
// }

// read session
export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.osuUser) {
    return Response.json(defaultSession);
  }

  if (new Date() > new Date(session.osuUser.expiresAt)) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const body = `client_id=${process.env.OSU_CLIENT_ID}&client_secret=${process.env.OSU_CLIENT_SECRET}&refresh_token=${session.osuUser.refreshToken}&grant_type=refresh_token`;

    const token = (await getData("https://osu.ppy.sh/oauth/token", {
      method: "POST",
      headers: headers,
      body: body,
    })) as OsuToken;

    session.osuUser = makeOsuUserFromToken(token);

    await session.save();
  }

  return Response.json(session);
}

// logout
export async function DELETE() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  session.destroy();

  return Response.json(defaultSession);
}
