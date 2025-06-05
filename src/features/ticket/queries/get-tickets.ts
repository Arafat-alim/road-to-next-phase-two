import { prisma } from "@/lib/prisma";

export const getTickets = async () => {
  return await prisma.tickets.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
