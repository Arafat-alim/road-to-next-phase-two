import React, { Suspense } from "react";

import { CardCompact } from "@/components/card-compact";
import { Heading } from "@/components/Heading";
import { Spinner } from "@/components/spinner";
import { TicketCreateForm } from "@/features/ticket/components/ticket-create-form";
import TicketList from "@/features/ticket/components/ticket-list";

const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />

      <CardCompact
        title="Create a ticket"
        description="New ticket will be created."
        className="w-full max-w-[420px] self-center"
        content={<TicketCreateForm />}
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
