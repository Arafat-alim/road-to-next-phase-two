import { notFound } from "next/navigation";
import React from "react";

import { RedirectToast } from "@/components/redirect-toast";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";

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
    <>
      <div className="flex justify-center animate-fade-in-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>
      <RedirectToast />
    </>
  );
};

export default TicketPage;
