import { Tickets } from "@prisma/client";

import { prisma } from "@/lib/prisma";

// import { Tickets } from "../../../../app/generated/prisma";

export const getTicket = async (id: string): Promise<Tickets | null> => {
  return await prisma.tickets.findUnique({
    where: {
      id: id,
    },
  });
};
