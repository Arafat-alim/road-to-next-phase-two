import React from "react";

import { ActionState } from "./utils/to-action-state";

type FieldErrorsProps = {
  actionState: ActionState;
  name: string;
};

const FieldErrors = ({ actionState, name }: FieldErrorsProps) => {
  const message = actionState.fieldErrors[name]?.[0];

  if (!message) {
    return null;
  }
  return <span className="text-sm text-red-500">{message}</span>;
};

export { FieldErrors };
