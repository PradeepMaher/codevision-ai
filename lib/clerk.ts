import { cookies } from "next/headers";
import { auth, currentUser } from "@clerk/nextjs";

export async function getCurrentUser() {
  return await currentUser();
}

export function requireAuth() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  return userId;
}

export function getClerkSessionCookie() {
  return cookies().get("__session")?.value;
}
