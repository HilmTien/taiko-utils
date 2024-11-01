interface WeightedScore {
  id: number;
  pp: number;
}

export function recalculate(
  weightedTopPlays: Array<WeightedScore>,
  customTopPlays: Map<WeightedScore["id"], number>,
  customIDs: Set<number>
) {
  const newTopPlays = [];

  for (let i = 0; i < weightedTopPlays.length; i++) {
    if (customIDs.has(weightedTopPlays[i].id)) {
      newTopPlays.push(customTopPlays.get(weightedTopPlays[i].id)!);
    } else {
      newTopPlays.push(weightedTopPlays[i].pp);
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
