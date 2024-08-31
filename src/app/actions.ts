"use server";

import { rateLimit } from "@/lib/rateLimit";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function revalidatePathname(path: string) {
  const ip = headers().get("x-forwarded-for") ?? "unknown";
  const isRateLimited = rateLimit(ip);
  if (isRateLimited) {
    return false;
  }

  revalidatePath(path);
  return true;
}
