"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { accountPasswordPath, accountProfilePath } from "@/path";

const AccountTabs = () => {
  const pathname = usePathname();

  return (
    <Tabs defaultValue={pathname.split("/").at(-1)}>
      <TabsList>
        <TabsTrigger value="profile">
          <Link href={accountProfilePath()}>Profile</Link>
        </TabsTrigger>
        <TabsTrigger value="password">
          <Link href={accountPasswordPath()}>Password</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export { AccountTabs };
