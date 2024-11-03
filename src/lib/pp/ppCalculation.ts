import { erf, erfInv } from "../erf";
import { PPAdjustingMod } from "../modIcons";
import { applyMods } from "../od/overallDifficulty";
import { calcAcc } from "../osuUtils";

export type PPCalcMethod = "2024" | "2022";
export const calcPP = (method: PPCalcMethod) => {
  if (method === "2022") return calcPP2022;

  return calcPP2024;
};

function computeDeviationUpperBound(
  od: number,
  maxCombo: number,
  goods: number,
  misses: number,
  selectedMods: Record<PPAdjustingMod, boolean>
) {
  const { ms300, ms150 } = applyMods(od, selectedMods, { forPPCalc: true });

  const z = 2.32634787404;
  const greats = maxCombo - goods - misses;

  function calcDeviationGreatWindow() {
    const n = maxCombo;
    const p = greats / n;

    const pLowerBound =
      (n * p + (z * z) / 2) / (n + z * z) -
      (z / (n + z * z)) * Math.sqrt(n * p * (1 - p) + (z * z) / 4);

    return ms300 / (Math.sqrt(2) * erfInv(pLowerBound));
  }

  function calcDeviationGoodWindow() {
    const n = maxCombo;
    const p = (maxCombo - misses) / n;

    const pLowerBound =
      (n * p + (z * z) / 2) / (n + z * z) -
      (z / (n + z * z)) * Math.sqrt(n * p * (1 - p) + (z * z) / 4);

    return ms150 / (Math.sqrt(2) * erfInv(pLowerBound));
  }

  const deviationGreatWindow = calcDeviationGreatWindow();
  const deviationGoodWindow = calcDeviationGoodWindow();

  return Math.min(deviationGreatWindow, deviationGoodWindow);
}

export function calcPP2024(
  sr: number,
  od: number,
  maxCombo: number,
  goods: number,
  misses: number,
  selectedMods: Record<PPAdjustingMod, boolean>
) {
  const hits = maxCombo - misses;
  const estimatedUnstableRate =
    computeDeviationUpperBound(od, maxCombo, goods, misses, selectedMods) * 10;
  const effectiveMissCount = Math.max(1.0, 1000.0 / hits) * misses;

  function calcDifficultyValue() {
    const base = Math.pow(5 * Math.max(1.0, sr / 0.115) - 4.0, 2.25) / 1150.0;
    const lengthBonus = 1 + 0.1 * Math.min(1.0, maxCombo / 1500.0);
    const missValue = Math.pow(0.986, effectiveMissCount);
    const ur = Math.pow(erf(400 / (Math.sqrt(2) * estimatedUnstableRate)), 2.0);

    let mods = 1;

    if (selectedMods.ez) mods *= 0.985;

    if (selectedMods.hd) mods *= 1.025;

    if (selectedMods.hr) mods *= 1.1;

    if (selectedMods.fl) mods *= 1.05 * lengthBonus;

    return base * lengthBonus * missValue * ur * mods;
  }

  const difficultyValue = calcDifficultyValue();

  function calcAccuracyValue() {
    const base =
      Math.pow(70 / estimatedUnstableRate, 1.1) * Math.pow(sr, 0.4) * 100.0;
    const lengthBonus = Math.min(1.15, Math.pow(maxCombo / 1500.0, 0.3));

    let mods = 1;

    if (selectedMods.fl && selectedMods.hd)
      mods *= Math.max(1.0, 1.05 * lengthBonus);

    return base * mods;
  }

  const accuracyValue = calcAccuracyValue();

  let multiplier = 1.13;

  if (selectedMods.hd) {
    multiplier *= 1.075;
  }

  if (selectedMods.ez) {
    multiplier *= 0.975;
  }

  return (
    Math.pow(
      Math.pow(difficultyValue, 1.1) + Math.pow(accuracyValue, 1.1),
      1.0 / 1.1
    ) * multiplier
  );
}

export function calcPP2022(
  sr: number,
  od: number,
  maxCombo: number,
  goods: number,
  misses: number,
  selectedMods: Record<PPAdjustingMod, boolean>
) {
  const acc = calcAcc(maxCombo, goods, misses);
  const hitTime300 = applyMods(od, selectedMods, { forPPCalc: true }).ms300;
  const hits = maxCombo - misses;
  const effMissCount = Math.max(1.0, 1000.0 / hits) * misses;

  const strainBase =
    Math.pow(5 * Math.max(1.0, sr / 0.115) - 4.0, 2.25) / 1150.0;
  const strainLenBonus = 1 + 0.1 * Math.min(1.0, hits / 1500.0);
  const strainFactors =
    Math.pow(0.986, effMissCount) * Math.pow(acc / 100, 2.0);
  let strainVal = strainBase * strainLenBonus * strainFactors;

  const accBase =
    Math.pow(60.0 / hitTime300, 1.1) *
    Math.pow(acc / 100, 8.0) *
    Math.pow(sr, 0.4) *
    27.0;
  const accLenBonus = Math.min(Math.pow(hits / 1500, 0.3), 1.15);
  let accVal = accBase * accLenBonus;

  let multiplier = 1.13;

  if (selectedMods.hd) {
    multiplier *= 1.075;
    strainVal *= 1.025;
  }

  if (selectedMods.ez) {
    multiplier *= 0.975;
    strainVal *= 0.985;
  }

  if (selectedMods.fl) {
    strainVal *= 1.05 * strainLenBonus;
  }

  if (selectedMods.hr) {
    strainVal *= 1.05;
  }

  if (selectedMods.hd && selectedMods.fl) {
    accVal *= Math.max(1.05, 1.075 * accLenBonus);
  }

  const ppVal =
    Math.pow(Math.pow(strainVal, 1.1) + Math.pow(accVal, 1.1), 1.0 / 1.1) *
    multiplier;
  return ppVal;
}
