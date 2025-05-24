import { LucideCircleCheck, LucideFileCheck, LucidePencil } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Heading } from "@/components/Heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialData } from "@/data";
import { ticketPath } from "@/path";

const TICKET_ICON = {
  OPEN: <LucideFileCheck />,
  IN_PROGRESS: <LucidePencil />,
  DONE: <LucideCircleCheck />,
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialData.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex gap-x-2 items-center">
                <span>{TICKET_ICON[ticket.status]}</span>
                <span className="text-lg font-semibold truncate">
                  {ticket.title}
                </span>
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
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
