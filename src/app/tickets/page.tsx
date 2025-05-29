import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Heading } from "@/components/Heading";
import Placeholder from "@/components/placeholder";
import { Spinner } from "@/components/spinner";
import TicketList from "@/features/ticket/components/ticket-list";

const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />
      <ErrorBoundary fallback={<Placeholder label="Something went wrong" />}>
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default TicketsPage;
