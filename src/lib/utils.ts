import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export function flipSetMember<T>(set: Set<T>, value: T) {
  const setCopy = new Set(set);
  return setCopy.delete(value) ? setCopy : setCopy.add(value);
}

export async function getData(url: string, init?: RequestInit) {
  try {
    const res = await fetch(url, init);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const json = await res.json();

    return json;
  } catch (e) {
    console.error((e as Error).message);
    return undefined;
  }
}

export function keepOpen(event: Event) {
  event.preventDefault();
}

export function round(value: number, decimals: number = 2) {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
