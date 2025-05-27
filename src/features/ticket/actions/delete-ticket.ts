"use server";

import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/path";
import { redirect } from "next/navigation";

export const deleteTicket = async (ticketId: string) => {
  await prisma.tickets.delete({
    where: {
      id: ticketId,
    },
  });

  redirect(ticketsPath());
};
