import { PPStateContext } from "@/components/pp/PPState";
import React from "react";

export function calcAcc(maxCombo: number, goods: number, misses: number) {
  return ((maxCombo - goods - misses) * 100 + goods * 50) / maxCombo;
}

export function calcHitTime300(od: number) {
  const state = React.useContext(PPStateContext);
  let scalingOD = od;

  if (state.selectedMods.ez) {
    scalingOD /= 2;
  }

  if (state.selectedMods.hr) {
    scalingOD *= 1.4;
  }

  const scaledOD = Math.max(Math.min(scalingOD, 10), 0);
  let hitTime300 = 50 - 3 * scaledOD;

  if (state.selectedMods.ht) {
    hitTime300 /= 0.75;
  }
  if (state.selectedMods.dt) {
    hitTime300 /= 1.5;
  }

  return hitTime300;
}

export function calcPP(
  sr: number,
  od: number,
  maxCombo: number,
  goods: number,
  misses: number
) {
  const state = React.useContext(PPStateContext);

  const acc = calcAcc(maxCombo, goods, misses);
  const hitTime300 = calcHitTime300(od);
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

  if (state.selectedMods.hd) {
    multiplier *= 1.075;
    strainVal *= 1.025;
  }

  if (state.selectedMods.ez) {
    multiplier *= 0.975;
    strainVal *= 0.985;
  }

  if (state.selectedMods.fl) {
    strainVal *= 1.05 * strainLenBonus;
  }

  if (state.selectedMods.hr) {
    strainVal *= 1.05;
  }

  if (state.selectedMods.hd && state.selectedMods.fl) {
    accVal *= Math.max(1.05, 1.075 * accLenBonus);
  }

  const ppVal =
    Math.pow(Math.pow(strainVal, 1.1) + Math.pow(accVal, 1.1), 1.0 / 1.1) *
    multiplier;
  return ppVal;
}
