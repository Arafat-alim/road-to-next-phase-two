"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/path";

const updateTicket = async (id: string, formData: FormData) => {
  const data = {
    //id: formData.get("id"), // we can use this
    title: formData.get("title"),
    content: formData.get("content"),
  };

  await prisma.tickets.update({
    where: {
      //   id: data.id as string,
      id: id,
    },
    data: {
      title: data.title as string,
      content: data.content as string,
    },
  });
  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};

export { updateTicket };
