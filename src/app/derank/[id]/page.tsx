import { getData } from "@/lib/utils";

import DerankApp from "@/components/derank/DerankApp";
import { DerankStateProvider } from "@/components/derank/DerankState";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params: { id } }: PageProps) {
  const data: Array<any> = await getData(
    `https://osu.ppy.sh/users/${id}/scores/best?mode=taiko&limit=100`
  );

  return (
    <main className="p-8">
      <DerankStateProvider>
        <DerankApp data={data} />
      </DerankStateProvider>
    </main>
  );
}
