import { redirect } from "next/navigation";
import React from "react";

import { getAuth } from "@/features/auth/queries/get-auth";
import { signInPath } from "@/path";

export default async function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = await getAuth();

  if (!auth.user) {
    redirect(signInPath());
  }

  return <>{children}</>;
}
