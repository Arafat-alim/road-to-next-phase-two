"use client";
import React from "react";
import { Navitem } from "../type";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { closedClassName } from "../constants";
import { Separator } from "@/components/ui/separator";

type NavItemProps = {
  navItem: Navitem;
  isOpen: boolean;
  isActive?: boolean;
};
const SidebarItem = ({ navItem, isOpen, isActive }: NavItemProps) => {
  return (
    <>
      {navItem.separator && <Separator />}
      <Link
        href={navItem.href}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "group relative flex h-12 justify-start",
          isActive && "bg-muted font-bold hover:bg-muted"
        )}
      >
        {navItem.icon}
        <span
          className={cn(
            "absolute left-12 text-base duration-200",
            isOpen ? "md:block hidden" : "w-[78px]",
            !isOpen && closedClassName
          )}
        >
          {navItem.title}
        </span>
      </Link>
    </>
  );
};

export default SidebarItem;
