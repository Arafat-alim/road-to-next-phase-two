"use server";
import { z } from "zod";
import { verify } from "@node-rs/argon2";

import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { redirect } from "next/navigation";
import { ticketsPath } from "@/path";
import { prisma } from "@/lib/prisma";

const signInSchema = z.object({
  email: z.string().min(1, { message: "Is required" }).max(191).email(),
  password: z.string().min(6).max(191),
});

export const signin = async (_actionState: ActionState, formData: FormData) => {
  try {
    const { email, password } = signInSchema.parse(
      Object.fromEntries(formData)
    );

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return toActionState("ERROR", "Incorrect email or passsword");
    }

    const verifyPassword = await verify(user.passwordHash, password);
    if (!verifyPassword) {
      return toActionState("ERROR", "Incorrect email or passsword");
    }
  } catch (error) {
    return fromErrorToActionState(error);
  }

  // return toActionState("SUCCESS", "Sign in successfull");
  redirect(ticketsPath());
};
