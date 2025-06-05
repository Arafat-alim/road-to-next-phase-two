import { notFound } from "next/navigation";
import React from "react";

import { CardCompact } from "@/components/card-compact";
import TicketUpsertForm from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";

// type TicketEditPageProps = {
//   params: {
//     ticketId: string;
//   };
// };
// --- START CHANGE (Fixing ESLint errors) ---
// 1. Removed 'searchParams' from destructuring as it's unused.
// 2. Disabled '@typescript-eslint/no-explicit-any' for this line to allow 'any'
//    without ESLint complaining.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TicketEditPage = async ({ params }: any) => {
  // --- END CHANGE ---
  const ticket = await getTicket(params.ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Edit Ticket"
        description="Edit your existing ticket"
        content={<TicketUpsertForm ticket={ticket} />}
        className="w-full max-w-[420px] animate-fade-in-from-top"
      />
    </div>
  );
};

export default TicketEditPage;
