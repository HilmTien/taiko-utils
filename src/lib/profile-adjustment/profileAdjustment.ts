import { ProfileAdjustmentState } from "@/components/profile-adjustment/ProfileAdjustmentState";

export function recalculate(profileAdjustmentState: ProfileAdjustmentState) {
  const newTopPlays = []

  const {topPlays, customTopPlays, customIDs} = profileAdjustmentState

  for (let i = 0; i < topPlays.length; i++) {
    if (customIDs.has(topPlays[i].id)) {
      newTopPlays.push(customTopPlays.get(topPlays[i].id)!);
    } else {
      newTopPlays.push(topPlays[i].pp)
    }
  }

  // Sort descending order
  newTopPlays.sort((a, b) => {
    return b - a;
  });

  let rawPP = 0;

  for (let i = 0; i < newTopPlays.length; i++) {
    rawPP += newTopPlays[i] * Math.pow(0.95, i);
  }

  return rawPP;
}
