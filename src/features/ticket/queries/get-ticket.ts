import { Tickets } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export const getTicket = async (id: string): Promise<Tickets | null> => {
  return await prisma.tickets.findUnique({
    where: {
      id: id,
    },
  });
};
