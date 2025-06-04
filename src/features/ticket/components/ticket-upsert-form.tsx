"use client";
import { Tickets } from "@prisma/client";
import React, { useActionState } from "react";

import { DatePicker } from "@/components/date-picker";
import { FieldErrors } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fromPaise } from "@/utils/currency";

import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
  ticket?: Tickets;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  return (
    <Form action={action} actionState={actionState}>
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        name="title"
        id="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <FieldErrors name="title" actionState={actionState} />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <FieldErrors name="content" actionState={actionState} />
      <div className="flex gap-x-2 mb-1">
        <div className="w-1/2">
          <Label htmlFor="deadline">Deadline</Label>
          {/* <Input
            id="deadline"
            name="deadline"
            type="date"
            defaultValue={
              (actionState.payload?.get("deadline") as string) ??
              ticket?.deadline
            }
          /> */}
          <DatePicker
            id="deadline"
            name="deadline"
            defaultValue={
              (actionState.payload?.get("deadline") as string) ??
              ticket?.deadline
            }
          />
          <FieldErrors name="deadline" actionState={actionState} />
        </div>

        <div className="w-1/2">
          <Label htmlFor="bounty">Bounty (₹)</Label>
          <Input
            id="bounty"
            name="bounty"
            type="number"
            defaultValue={
              (actionState.payload?.get("bounty") as string) ??
              (ticket?.bounty ? fromPaise(ticket?.bounty) : "")
            }
            step=".01"
          />
          <FieldErrors name="bounty" actionState={actionState} />
        </div>
      </div>

      <SubmitButton label={ticket ? "Edit" : "Submit"} />
    </Form>
  );
};

export default TicketUpsertForm;
