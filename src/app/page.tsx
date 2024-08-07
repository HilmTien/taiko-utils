import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <Link href={"/od"}>Go to OD app</Link>
      <Link href={"/profile-adjustment"}>Go to Profile Adjustment app</Link>
    </main>
  );
}
