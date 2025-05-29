"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

export const deleteTicket = async (ticketId: string) => {
  await prisma.tickets.delete({
    where: {
      id: ticketId,
    },
  });

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
