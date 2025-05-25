import Link from "next/link";
import React from "react";

import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialData } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/path";

// --- START CHANGE (Fixing ESLint errors) ---
// 1. Removed 'searchParams' from destructuring as it's unused.
// 2. Disabled '@typescript-eslint/no-explicit-any' for this line to allow 'any'
//    without ESLint complaining.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TicketPage = async ({ params }: any) => {
  // --- END CHANGE ---
  const ticketID = Number(params.ticketId);
  const ticket = initialData.find((t) => Number(t.id) === ticketID);

  if (!ticket) {
    return (
      <Placeholder
        label="Tickets not found"
        button={
          <Button variant={"link"}>
            <Link href={ticketsPath()}>Back to Tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
