import { ODAdjustingMod } from "../modIcons";
import { round } from "../utils";

export function ODtoMS300(od: number, useLinearOD: boolean = false) {
  return useLinearOD ? 49.5 - od * 3 : Math.floor(49 - od * 3) + 0.5;
}

export function MStoOD300(ms: number, useLinearOD: boolean = false) {
  return useLinearOD ? (49.5 - ms) / 3 : Math.floor(49.5 - ms) / 3;
}

export function ODtoMS150(od: number, useLinearOD: boolean = false) {
  if (useLinearOD) {
    return od < 5 ? 119.5 - 8 * od : 109.5 - 6 * od;
  } else {
    return Math.floor(od < 5 ? 119 - 8 * od : 109 - 6 * od) + 0.5;
  }
}

export function MStoOD150(ms: number, useLinearOD: boolean = false) {
  if (useLinearOD) {
    return ms > 79 ? (119.5 - ms) / 8 : (109.5 - ms) / 6;
  } else {
    return ms > 79 ? Math.floor(119.5 - ms) / 8 : Math.floor(109.5 - ms) / 6;
  }
}

export function applyMods(
  od: number,
  activeMods: Record<ODAdjustingMod, boolean>,
  useLinearOD: boolean = false
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
  let ms300 = ODtoMS300(od);
  let ms150 = ODtoMS150(od);

  if (activeMods.ht) {
    ms300 *= 4 / 3;
    ms150 *= 4 / 3;
  }

  if (activeMods.dt) {
    ms300 *= 2 / 3;
    ms150 *= 2 / 3;
  }

  // highest OD that fits the ms300/ms150 boundaries
  let odMax300 = MStoOD300(ms300, useLinearOD);
  let odMax150 = MStoOD150(ms150, useLinearOD);

  return { ms300, ms150, odMax300, odMax150 };
}
