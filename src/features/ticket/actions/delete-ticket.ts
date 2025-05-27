"use server";

import { prisma } from "@/lib/prisma";

export const deleteTicket = async (ticketId: string) => {
  return prisma.tickets.delete({
    where: {
      id: ticketId,
    },
  });
};
