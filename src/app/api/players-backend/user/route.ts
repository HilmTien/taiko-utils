import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const data = await fetch(
    `https://taiko-utils-backend.vercel.app/users/${searchParams.get("id")}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  return Response.json({ data });
}
