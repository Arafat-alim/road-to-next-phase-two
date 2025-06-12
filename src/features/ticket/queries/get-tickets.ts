import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";

import { SearchParams } from "../searchParams";

export const getTickets = async (
  userId?: string | undefined,
  searchParams?: SearchParams
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
      title: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
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
