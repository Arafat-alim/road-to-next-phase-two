"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { setCookieByKey } from "@/actions/cookies";
import {
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/path";

export const deleteTicket = async (ticketId: string) => {
  const { user } = await getAuthOrRedirect();
  try {
    if (ticketId) {
      const ticket = await prisma.tickets.findUnique({
        where: {
          id: ticketId,
        },
      });

      if (!ticket || !isOwner(user, ticket)) {
        return toActionState("ERROR", "Not authorised");
      }
    }
    await prisma.tickets.delete({
      where: {
        id: ticketId,
      },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }

  revalidatePath(ticketsPath());
  setCookieByKey("toast", "Ticket deleted!");
  redirect(ticketsPath());
};
