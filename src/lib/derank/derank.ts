import { DerankState } from "@/components/derank/DerankState";

export function recalculate(derankState: DerankState) {
  const topPlays = []

  for (let i = 0; i < derankState.topPlays.length; i++) {
    if (derankState.derankedIDs.has(derankState.topPlays[i].id)) {
      topPlays.push(derankState.customTopPlays.get(derankState.topPlays[i].id)!);
    } else {
      topPlays.push(derankState.topPlays[i].pp)
    }
  }

  topPlays.sort((a, b) => {
    return b - a;
  });

  let rawPP = 0;

  for (let i = 0; i < topPlays.length; i++) {
    rawPP += topPlays[i] * Math.pow(0.95, i);
  }

  return rawPP;
}
