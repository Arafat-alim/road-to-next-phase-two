"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { setCookieByKey } from "@/actions/cookies";
import { fromErrorToActionState } from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/path";

export const deleteTicket = async (ticketId: string) => {
  try {
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
