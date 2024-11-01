export function calcAcc(maxCombo: number, goods: number, misses: number) {
  return ((maxCombo - goods - misses) * 100 + goods * 50) / maxCombo;
}
