"use client";
import React from "react";
import { Navitem } from "../type";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { closedClassName } from "../constants";

type NavItemProps = {
  navItem: Navitem;
  isOpen: boolean;
};
const SidebarItem = ({ navItem, isOpen }: NavItemProps) => {
  const path = usePathname();
  const isActive = path === navItem.href;

  return (
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
  );
};

export default SidebarItem;
