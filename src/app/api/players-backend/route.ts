export async function GET() {
  const data = await fetch("https://taiko-utils-backend.vercel.app/pp/5000", {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return Response.json({ data });
}
