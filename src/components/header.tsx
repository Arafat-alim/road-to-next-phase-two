"use client";
import { LucideKanbanSquare, LucideLogOut } from "lucide-react";
import Link from "next/link";
import React from "react";

import { signOut } from "@/features/auth/actions/sign-out";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { homePath, signInPath, ticketsPath } from "@/path";

import { SubmitButton } from "./form/submit-button";
import { ThemeSwitcher } from "./theme/theme-switcher";
import { Button, buttonVariants } from "./ui/button";

const Header = () => {
  const { user, isFetched } = useAuth();

  if (!isFetched) {
    return null;
  }

  const navItems = user ? (
    <>
      <Link
        href={ticketsPath()}
        className={buttonVariants({ variant: "default" })}
      >
        <span className="text-md font-medium">Tickets</span>
      </Link>

      <form action={signOut}>
        <SubmitButton label="Sign out" icon={<LucideLogOut />} />
      </form>
    </>
  ) : (
    <>
      {/* <Link
        href={signUpPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        <span className="text-md font-medium">Sign up</span>
      </Link> */}
      <Link
        href={signInPath()}
        className={buttonVariants({ variant: "default" })}
      >
        <span className="text-md font-medium">Sign in</span>
      </Link>
    </>
  );

  return (
    <nav className="animate-header-from-top supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between">
      <div>
        <Button asChild variant={"ghost"}>
          <Link href={homePath()}>
            <LucideKanbanSquare />
            <h1 className="ml-1 text-lg font-semibold">TicketBounty</h1>
          </Link>
        </Button>
      </div>
      <div className="flex gap-x-2 items-center">
        <ThemeSwitcher />
        {navItems}
      </div>
    </nav>
  );
};

export { Header };
