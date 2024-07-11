export function ODtoMS300(od: number) {
  return Math.floor(49 - od * 3) + 0.5;
}

export function MStoOD300(ms: number) {
  return -ms / 3 + 16.5;
}

export function ODtoMS150(od: number) {
  return Math.floor(od < 5 ? 119 - 8 * od : 109 - 6 * od) + 0.5;
}

export function MStoOD150(ms: number) {
  return ms > 79 ? -ms / 8 + 239 / 16 : (-1 / 12) * (2 * ms - 219);
}
