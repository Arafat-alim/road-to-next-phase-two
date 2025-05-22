import Link from "next/link";
import React from "react";

import { initialData } from "@/data";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

const PencilIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    />
  </svg>
);
const DocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
  </svg>
);

const TICKET_ICON = {
  OPEN: <DocumentIcon />,
  IN_PROGRESS: <PencilIcon />,
  DONE: <CheckIcon />,
};

type TicketPageProps = {
  params: {
    ticketId: string; // Note: URL params are always strings
  };
};

const TicketPage = ({ params }: TicketPageProps) => {
  const ticketId = Number(params.ticketId);
  const ticket = initialData.find((t) => t.id === ticketId);

  if (!ticket) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Ticket Not Found</h1>
        <Link
          href="/tickets"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Back to Tickets
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-6">
        <Link href="/tickets" className="text-blue-500 hover:underline">
          ← Back to all tickets
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4">Ticket Details</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-medium text-gray-500">Ticket ID</h3>
            <p>{ticket.id}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-500">Status</h3>
            <p>{TICKET_ICON[ticket.status]}</p>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-500">Content</h3>
          <p className="mt-1">{ticket.content}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
