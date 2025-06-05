import React, { cloneElement, useActionState, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Form } from "./form/form";
import { SubmitButton } from "./form/submit-button";
import { ActionState, EMPTY_ACTION_STATE } from "./form/utils/to-action-state";

type UseConfirmDialogProps = {
  title?: string;
  description?: string;
  action: () => Promise<ActionState>;
  trigger: React.ReactElement<{ onClick?: () => void }>;
};

const useConfirmDialog = ({
  action,
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. Make sure you understand the consequences.",
  trigger,
}: UseConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [actionState, formAction] = useActionState(action, EMPTY_ACTION_STATE);

  const dialogTrigger = cloneElement(trigger, {
    onClick: () => setIsOpen((prevState) => !prevState),
  });

  const handleSubmit = () => {
    setIsOpen(false);
  };

  const dialog = (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Form
              actionState={actionState}
              action={formAction}
              onSuccess={handleSubmit}
            >
              <SubmitButton label="Confirm" />
            </Form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return [dialogTrigger, dialog];
};

export { useConfirmDialog };
