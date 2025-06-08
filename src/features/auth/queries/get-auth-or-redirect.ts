import { redirect } from "next/navigation";

import { signInPath } from "@/path";

import { getAuth } from "./get-auth";

const getAuthOrRedirect = async () => {
  const auth = await getAuth();
  if (!auth.user) {
    redirect(signInPath());
  }

  return auth;
};

export { getAuthOrRedirect };
