"use server";
import { cookies } from "next/headers";
import { cache } from "react";

import { validateSession } from "@/lib/lucia";

import { SESSION_COOKIE_NAME } from "../utils/session-cookie";

const getAuth = cache(async () => {
  const sessionToken =
    // @ts-expect-error incorrect type inference in next/headers
    (await cookies().get(SESSION_COOKIE_NAME)?.value) ?? null;

  if (!sessionToken) {
    return {
      user: null,
      session: null,
    };
  }

  return await validateSession(sessionToken);
});

export { getAuth };
