import { getData } from "@/lib/utils";

import Navbar from "@/components/general/navbar/Navbar";
import ProfileAdjustmentApp from "@/components/profile-adjustment/ProfileAdjustmentApp";
import { ProfileAdjustmentStateProvider } from "@/components/profile-adjustment/ProfileAdjustmentState";
import { permanentRedirect } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params: { id } }: PageProps) {
  const data: Array<any> = await getData(
    `https://osu.ppy.sh/users/${id}/scores/best?mode=taiko&limit=100`,
    { next: { revalidate: 86400 } }
  );

  if (!data) {
    permanentRedirect("/profile-adjustment");
  }

  return (
    <>
      <Navbar />
      <main className="p-8">
        <ProfileAdjustmentStateProvider>
          <ProfileAdjustmentApp data={data} userId={id} />
        </ProfileAdjustmentStateProvider>
      </main>
    </>
  );
}
