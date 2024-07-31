export function recalculate(data: Array<any>, derankedIDs: Set<number>) {
  for (let i = 0; i < data.length; i++) {
    if (derankedIDs.has(data[i].id)) {
      data[i] = data.at(-1);
    }
  }

  data.sort((a, b) => {
    return b.pp - a.pp;
  });

  let rawPP = 0;

  for (let i = 0; i < data.length; i++) {
    rawPP += data[i].pp * Math.pow(0.95, i);
  }

  return rawPP;
}
