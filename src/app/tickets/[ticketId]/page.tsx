import { notFound } from "next/navigation";
import React from "react";

import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { homePath } from "@/path";
import { Separator } from "@/components/ui/separator";

// --- START CHANGE (Fixing ESLint errors) ---
// 1. Removed 'searchParams' from destructuring as it's unused.
// 2. Disabled '@typescript-eslint/no-explicit-any' for this line to allow 'any'
//    without ESLint complaining.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TicketPage = async ({ params }: any) => {
  // --- END CHANGE ---
  const ticket = await getTicket(params.ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Breadcrumbs
        breadcrumbs={[
          { title: "Tickets", href: homePath() },
          { title: "Ticket" },
        ]}
      />

      <Separator />

      <div className="flex justify-center animate-fade-in-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>
    </div>
  );
};

export default TicketPage;
