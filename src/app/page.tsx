import React, { Suspense } from "react";

import { Heading } from "@/components/Heading";
import { Spinner } from "@/components/spinner";
import TicketList from "@/features/ticket/components/ticket-list";
import { SearchParams } from "@/features/ticket/searchParams";

type HomePageProps = {
  searchParams: SearchParams;
};

const HomePage = ({ searchParams }: HomePageProps) => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="All Tickets"
        description="Tickets by everyone at one place"
      />

      <Suspense fallback={<Spinner />}>
        <TicketList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default HomePage;
