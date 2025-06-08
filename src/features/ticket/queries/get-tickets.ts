import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export const getTickets = async (
  userId?: string | undefined
): Promise<
  Prisma.TicketsGetPayload<{
    include: {
      user: {
        select: {
          username: true;
        };
      };
    };
  }>[]
> => {
  return await prisma.tickets.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
};
