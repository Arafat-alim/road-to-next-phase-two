import { ZodError } from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timestamps: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timestamps: Date.now(),
};

export const fromErrorToActionState = (
  error: unknown,
  formData?: FormData
): ActionState => {
  if (error instanceof ZodError) {
    //   if error comes from zod
    return {
      status: "ERROR",
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
      timestamps: Date.now(),
    };
  } else if (error instanceof Error) {
    //   if another error instance occured
    //   e.g database error
    return {
      status: "ERROR",
      message: error.message,
      fieldErrors: {},
      payload: formData,
      timestamps: Date.now(),
    };
  } else {
    //   if not an error instance but something else crashed.
    //   return generic error message
    return {
      status: "ERROR",
      message: "An unknown error occured",
      fieldErrors: {},
      payload: formData,
      timestamps: Date.now(),
    };
  }
};

export const toActionState = (
  status: ActionState["status"],
  message: string
): ActionState => {
  return {
    status,
    message,
    fieldErrors: {},
    timestamps: Date.now(),
  };
};
