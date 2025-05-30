"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/path";
import { z } from "zod";

const upsertTicketSchema = z.object({
  title: z.string().min(1).max(170),
  content: z.string().min(1).max(1024),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: { message: string },
  formData: FormData
) => {
  try {
    const data = upsertTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });

    await prisma.tickets.upsert({
      where: {
        id: id || "",
      },
      update: data,
      create: data,
    });
  } catch (err) {
    return {
      message: "Something went wrong",
    };
  }

  revalidatePath(ticketsPath());

  if (id) {
    redirect(ticketPath(id));
  }

  return { message: "Ticket created" };
};
