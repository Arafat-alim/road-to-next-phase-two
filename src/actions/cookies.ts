"use server";
import { cookies } from "next/headers";

export const getCookieByKey = async (key: string) => {
  // @ts-expect-error incorrect type inference in next/headers
  const cookie = cookies().get(key);

  if (!cookie) {
    return null;
  }
  return cookie.value;
};

export const setCookieByKey = async (key: string, value: string) => {
  // @ts-expect-error incorrect type inference in next/headers
  cookies().set(key, value);
};

export const deleteCookieByKey = async (key: string) => {
  // @ts-expect-error incorrect type inference in next/headers
  cookies().delete(key);
};
