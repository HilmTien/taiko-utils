import { ODAdjustingMod } from "../modIcons";
import { round } from "../utils";

type ODCalculationMethods = {
  useLinearOD?: boolean;
  forPPCalc?: boolean;
};

export function ODtoMS300(
  od: number,
  { useLinearOD, forPPCalc }: ODCalculationMethods
) {
  if (forPPCalc) {
    return 50 - od * 3;
  }

  if (useLinearOD) {
    return 49.5 - od * 3;
  }

  return Math.floor(49 - od * 3) + 0.5;
}

export function MStoOD300(
  ms: number,
  { useLinearOD, forPPCalc }: ODCalculationMethods
) {
  if (forPPCalc) {
    return (50 - ms) / 3;
  }

  if (useLinearOD) {
    return (49.5 - ms) / 3;
  }

  return Math.floor(49.5 - ms) / 3;
}

export function ODtoMS150(
  od: number,
  { useLinearOD, forPPCalc }: ODCalculationMethods
) {
  if (forPPCalc) {
    return od < 5 ? 120 - od * 8 : 110 - 6 * od;
  }

  if (useLinearOD) {
    return od < 5 ? 119.5 - 8 * od : 109.5 - 6 * od;
  }

  return Math.floor(od < 5 ? 119 - 8 * od : 109 - 6 * od) + 0.5;
}

export function MStoOD150(
  ms: number,
  { useLinearOD, forPPCalc }: ODCalculationMethods
) {
  if (forPPCalc) {
    return Math.sign(ms - 80) < 0 ? (110 - ms) / 6 : (120 - ms) / 8;
  }

  if (useLinearOD) {
    return ms > 79 ? (119.5 - ms) / 8 : (109.5 - ms) / 6;
  }

  return ms > 79 ? Math.floor(119.5 - ms) / 8 : Math.floor(109.5 - ms) / 6;
}

export function applyMods(
  od: number,
  activeMods: Record<ODAdjustingMod, boolean>,
  odCalculationMethods: ODCalculationMethods
) {
  if (activeMods.ez) {
    od /= 2;
  }

  if (activeMods.hr) {
    od *= 1.4;
    if (od > 10) {
      od = 10;
    }
  }

  od = round(od, 2);
  let ms300 = ODtoMS300(od, { ...odCalculationMethods });
  let ms150 = ODtoMS150(od, { ...odCalculationMethods });

  if (activeMods.ht) {
    ms300 *= 4 / 3;
    ms150 *= 4 / 3;
  }

  if (activeMods.dt || activeMods.nc) {
    ms300 *= 2 / 3;
    ms150 *= 2 / 3;
  }

  // highest OD that fits the ms300/ms150 boundaries
  let odMax300 = MStoOD300(ms300, { ...odCalculationMethods });
  let odMax150 = MStoOD150(ms150, { ...odCalculationMethods });

  return { ms300, ms150, odMax300, odMax150 };
}
