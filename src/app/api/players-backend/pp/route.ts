import { getData } from "@/lib/utils";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const data = await getData(
    `https://taiko-utils-backend.vercel.app/pp/${searchParams.get("pp")}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return Response.json({ data });
}
