import React from "react";

import Placeholder from "@/components/placeholder";
import { SearchInput } from "@/components/search-input";

import { getTickets } from "../queries/get-tickets";
import { SearchParams } from "../searchParams";
import { TicketItem } from "./ticket-item";

type TicketListProps = {
  userId?: string;
  searchParams: SearchParams;
};

const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const tickets = await getTickets(userId, searchParams);

  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      <div className="w-full max-w-[420px] ">
        <SearchInput placeholder="Search ticket..." />
      </div>
      {tickets.length ? (
        tickets.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)
      ) : (
        <Placeholder label="No ticket found" />
      )}
    </div>
  );
};

export default TicketList;
