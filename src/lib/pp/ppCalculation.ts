import { PPAdjustingMod } from "../modIcons";
import { applyMods } from "../od/overallDifficulty";

export function calcAcc(maxCombo: number, goods: number, misses: number) {
  return ((maxCombo - goods - misses) * 100 + goods * 50) / maxCombo;
}

export function calcPP(
  sr: number,
  od: number,
  maxCombo: number,
  goods: number,
  misses: number,
  selectedMods: Record<PPAdjustingMod, boolean>
) {
  const acc = calcAcc(maxCombo, goods, misses);
  const hitTime300 = applyMods(od, selectedMods)["ms300"];
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
