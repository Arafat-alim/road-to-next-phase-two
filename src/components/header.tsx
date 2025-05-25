import { LucideKanbanSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

import { homePath, ticketsPath } from "@/path";

import { Button, buttonVariants } from "./ui/button";
import { ThemeSwitcher } from "./theme/theme-switcher";

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between">
      <div>
        <Button asChild variant={"ghost"}>
          <Link href={homePath()}>
            <LucideKanbanSquare />
            <h1 className="ml-1 text-lg font-semibold">TicketBounty</h1>
          </Link>
        </Button>
      </div>
      <div className="flex gap-x-2 items-center">
        {/* <Button>  asChild variant={"outline"} */}
        <ThemeSwitcher />
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          <span className="text-lg font-medium">Tickets</span>
        </Link>
        {/* </Button> */}
      </div>
    </nav>
  );
};

export { Header };
