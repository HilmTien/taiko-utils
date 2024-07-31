import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function round(value: number, decimals: number = 2) {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export function keepOpen(event: Event) {
  event.preventDefault();
}

export async function getData(url: string) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const json = await res.json();

    return json;
  } catch (e) {
    console.error((e as Error).message);
    return [];
  }
}
