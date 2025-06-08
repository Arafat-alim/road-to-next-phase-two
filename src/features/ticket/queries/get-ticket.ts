import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export const getTicket = async (
  id: string
): Promise<Prisma.TicketsGetPayload<{
  include: {
    user: {
      select: {
        username: true;
      };
    };
  };
}> | null> => {
  return await prisma.tickets.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
};
