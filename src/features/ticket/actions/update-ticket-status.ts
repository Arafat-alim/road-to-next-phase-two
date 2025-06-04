"use server";
import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

import {
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/path";

const updateTicketStatus = async (id: string, status: TicketStatus) => {
  try {
    await prisma.tickets.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  } catch (err) {
    await fromErrorToActionState(err);
  }

  revalidatePath(ticketsPath());

  return toActionState("SUCCESS", "Ticket status updated!");
};

export { updateTicketStatus };
