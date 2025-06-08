import React from "react";
import { getAuth } from "./get-auth";
import { redirect } from "next/navigation";
import { signInPath } from "@/path";

const getAuthOrRedirect = async () => {
  const auth = await getAuth();
  if (!auth.user) {
    redirect(signInPath());
  }

  return auth;
};

export { getAuthOrRedirect };
