"use server";
import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

import {
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/path";

const updateTicketStatus = async (id: string, status: TicketStatus) => {
  const { user } = await getAuthOrRedirect();
  try {
    if (id) {
      const ticket = await prisma.tickets.findUnique({
        where: {
          id,
        },
      });

      if (!ticket || !isOwner(user, ticket)) {
        return toActionState("ERROR", "Not authorised");
      }
    }

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
