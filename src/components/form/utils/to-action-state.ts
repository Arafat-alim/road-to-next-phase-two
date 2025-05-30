import { ZodError } from "zod";

export type ActionState = {
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof ZodError) {
    //   if error comes from zod
    return {
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
    };
  } else if (error instanceof Error) {
    //   if another error instance occured
    //   e.g database error
    return {
      message: error.message,
      fieldErrors: {},
      payload: formData,
    };
  } else {
    //   if not an error instance but something else crashed.
    //   return generic error message
    return {
      message: "An unknown error occured",
      fieldErrors: {},
      payload: formData,
    };
  }
};
