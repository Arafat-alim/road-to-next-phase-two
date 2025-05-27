import clsx from "clsx";
import { LucideSquareArrowOutUpRight, LucideTrash } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tickets } from "@/generated/prisma";
import { ticketPath } from "@/path";

import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICON } from "../constants";

type TicketItemProps = {
  ticket: Tickets;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant={"outline"} size={"icon"}>
        <LucideTrash className="w-4 h-4" />
      </Button>
    </form>
  );

  const detailButton = (
    <Button variant={"outline"} asChild size={"icon"}>
      <Link prefetch href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="w-4 h-4" />
      </Link>
    </Button>
  );
  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[420px]": !isDetail,
        "max-w-[580px]": isDetail,
      })}
    >
      <Card className="w-full ">
        <CardHeader>
          <CardTitle className="flex gap-x-2 items-center">
            <span>{TICKET_ICON[ticket.status]}</span>
            <span className="text-lg font-semibold truncate">
              {ticket.title}
            </span>
          </CardTitle>
        </CardHeader>

        <CardContent
          className={clsx("whitespace-break-spaces", {
            "line-clamp-3": !isDetail,
          })}
        >
          <span>{ticket.content}</span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};

export { TicketItem };
