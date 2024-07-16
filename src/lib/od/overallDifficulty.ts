import { ODAdjustingMod } from "../modIcons";
import { round } from "../utils";

export function ODtoMS300(od: number) {
  return Math.floor(49 - od * 3) + 0.5;
}

export function MStoOD300(ms: number) {
  return Math.floor(49.5 - ms) / 3;
}

export function ODtoMS150(od: number) {
  return Math.floor(od < 5 ? 119 - 8 * od : 109 - 6 * od) + 0.5;
}

export function MStoOD150(ms: number) {
  return ms > 79 ? Math.floor(119.5 - ms) / 8 : Math.floor(109.5 - ms) / 6;
}

export function applyMods(
  od: number,
  activeMods: Record<ODAdjustingMod, boolean>
) {
  if (activeMods.ez) {
    od /= 2;
  } else if (activeMods.hr) {
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
  } else if (activeMods.dt) {
    ms300 *= 2 / 3;
    ms150 *= 2 / 3;
  }

  // highest OD that fits the ms300/ms150 boundaries
  let odMax300 = MStoOD300(ms300);
  let odMax150 = MStoOD150(ms150);

  return { ms300, ms150, odMax300, odMax150 };
}
