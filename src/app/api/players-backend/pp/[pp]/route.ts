export async function GET({ params }: { params: { pp: string } }) {
  return params.pp;
  const data = await fetch(
    `https://taiko-utils-backend.vercel.app/pp/${params.pp}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  return Response.json({ data });
}
