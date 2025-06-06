"use client";

import React, { useActionState } from "react";

import { FieldErrors } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";

import { signin } from "../actions/sign-in";

const SignInForm = () => {
  const [actionState, action] = useActionState(signin, EMPTY_ACTION_STATE);
  return (
    <Form action={action} actionState={actionState}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        defaultValue={actionState.payload?.get("email") as string}
      />
      <FieldErrors actionState={actionState} name="email" />

      <Input
        type="password"
        name="password"
        placeholder="Password"
        defaultValue={actionState.payload?.get("password") as string}
      />
      <FieldErrors actionState={actionState} name="password" />

      <SubmitButton label="Sign in" />
    </Form>
  );
};

export { SignInForm };
