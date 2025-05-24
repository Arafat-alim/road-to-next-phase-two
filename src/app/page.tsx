import Link from "next/link";
import React from "react";

import { Heading } from "@/components/Heading";
import { ticketsPath } from "@/path";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home Page" description="Your home place to start" />
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
