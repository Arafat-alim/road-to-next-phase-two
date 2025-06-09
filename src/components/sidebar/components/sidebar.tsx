"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { navItems } from "../constants";
import SidebarItem from "./sidebar-item";

const Sidebar = () => {
  const [isTransition, setIsTransition] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (open: boolean) => {
    setIsTransition(true);
    setIsOpen(open);
    setTimeout(() => setIsTransition(false), 200);
  };

  return (
    <nav
      className={cn(
        "h-screen border-r pt-24",
        isTransition && "duration-200",
        isOpen ? "md:w-60 w-[78px]" : "w-[78px]"
      )}
      onMouseEnter={() => handleToggle(true)}
      onMouseLeave={() => handleToggle(false)}
    >
      <div className="px-3 py-2">
        <nav className="space-y-2">
          {navItems.map((nav) => (
            <SidebarItem navItem={nav} key={nav.title} isOpen={isOpen} />
          ))}
        </nav>
      </div>
    </nav>
  );
};

export { Sidebar };
