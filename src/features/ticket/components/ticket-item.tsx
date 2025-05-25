import Link from "next/link";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/path";

import { TICKET_ICON } from "../constants";
import { TicketItemProps } from "../types";
import { Button } from "@/components/ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import clsx from "clsx";

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const utilityButton = (
    <Button variant={"outline"} asChild size={"icon"}>
      <Link href={ticketPath(ticket.id)}>
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
      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{utilityButton}</div>
      )}
    </div>
  );
};

export { TicketItem };
