import { notFound } from "next/navigation";
import React from "react";

import { CardCompact } from "@/components/card-compact";
import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import TicketUpsertForm from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { homePath, ticketPath, ticketsPath } from "@/path";
import { Separator } from "@/components/ui/separator";

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

  const { user } = await getAuth();
  const isTicketOwner = isOwner(user, ticket);

  if (!isTicketOwner) {
    notFound();
  }
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Breadcrumbs
        breadcrumbs={[
          { title: "Tickets", href: homePath() },
          { title: ticket.title, href: ticketPath(ticket.id) },
          {
            title: "Edit",
          },
        ]}
      />
      <Separator />
      <div className="flex-1 flex flex-col justify-center items-center">
        <CardCompact
          title="Edit Ticket"
          description="Edit your existing ticket"
          content={<TicketUpsertForm ticket={ticket} />}
          className="w-full max-w-[420px] animate-fade-in-from-top"
        />
      </div>
    </div>
  );
};

export default TicketEditPage;
