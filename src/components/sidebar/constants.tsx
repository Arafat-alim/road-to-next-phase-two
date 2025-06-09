import { homePath, ticketsPath } from "@/path";
import { Navitem } from "./type";
import { LucideBook, LucideLibrary } from "lucide-react";

export const navItems: Navitem[] = [
  {
    title: "All Tickets",
    href: homePath(),
    icon: <LucideLibrary />,
  },
  {
    title: "My Tickets",
    href: ticketsPath(),
    icon: <LucideBook />,
  },
];

export const closedClassName =
  "text-background opacity-0 transition-all duration-300 group-hover:z-40 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group:hover:p-2 group:hover:opacity-100";
