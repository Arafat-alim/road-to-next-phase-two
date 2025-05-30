"use client";
import { Tickets } from "@prisma/client";
import React, { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { upsertTicket } from "../actions/upsert-ticket";
import { LucideLoaderCircle } from "lucide-react";

type TicketUpsertFormProps = {
  ticket?: Tickets;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [isPending, startTransition] = useTransition();

  const upsertTicketAction = (formData: FormData) => {
    startTransition(async () => {
      upsertTicket.bind(null, ticket?.id)(formData);
    });
  };
  return (
    <form action={upsertTicketAction} className="flex flex-col gap-y-2">
      {/* <input name="id" type="hidden" defaultValue={ticket.id} /> */}
      <Label htmlFor="title">Title</Label>
      <Input type="text" name="title" id="title" defaultValue={ticket?.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={ticket?.content} />

      <Button disabled={isPending} type="submit">
        {isPending && (
          <LucideLoaderCircle className="w-4 h-4 mr-2 animate-spin" />
        )}
        {ticket ? "Edit" : "Submit"}
      </Button>
    </form>
  );
};

export default TicketUpsertForm;
