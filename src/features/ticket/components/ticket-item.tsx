import Link from "next/link";
import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketPath } from "@/path";

import { TICKET_ICON } from "../constants";
import { TicketItemProps } from "../types";

const TicketItem = ({ ticket }: TicketItemProps) => {
  return (
    <Card className="w-full max-w-[420px]">
      <CardHeader>
        <CardTitle className="flex gap-x-2 items-center">
          <span>{TICKET_ICON[ticket.status]}</span>
          <span className="text-lg font-semibold truncate">{ticket.title}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="line-clamp-3 whitespace-break-spaces">
        <span>{ticket.content}</span>
      </CardContent>

      <CardFooter>
        <Link href={ticketPath(ticket.id)} className="text-sm underline">
          View
        </Link>
      </CardFooter>
    </Card>
  );
};

export { TicketItem };
