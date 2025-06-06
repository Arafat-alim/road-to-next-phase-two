"use client";
import React, { useActionState } from "react";

import { FieldErrors } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";

import { signup } from "../actions/sign-up";

const SignUpForm = () => {
  const [actionState, action] = useActionState(signup, EMPTY_ACTION_STATE);
  return (
    <Form action={action} actionState={actionState}>
      <Input
        name="username"
        type="text"
        placeholder="Username"
        defaultValue={actionState.payload?.get("username") as string}
      />
      <FieldErrors actionState={actionState} name="username" />

      <Input
        name="email"
        type="text"
        placeholder="Email"
        defaultValue={actionState.payload?.get("email") as string}
      />
      <FieldErrors actionState={actionState} name="email" />

      <Input
        name="password"
        type="password"
        placeholder="Password"
        defaultValue={actionState.payload?.get("password") as string}
      />
      <FieldErrors actionState={actionState} name="password" />

      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        defaultValue={actionState.payload?.get("confirmPassword") as string}
      />
      <FieldErrors actionState={actionState} name="confirmPassword" />

      <SubmitButton label="Sign up" />
    </Form>
  );
};

export { SignUpForm };
