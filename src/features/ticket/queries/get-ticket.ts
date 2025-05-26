import { Ticket } from "../types";
import { prisma } from "@/lib/prisma";

export const getTicket = async (id: string): Promise<Ticket | null> => {
  return await prisma.tickets.findUnique({
    where: {
      id: id,
    },
  });
};
