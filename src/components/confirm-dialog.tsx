import React, { cloneElement, useState } from "react";

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

import { ActionState } from "./form/utils/to-action-state";
import { Button } from "./ui/button";

type UseConfirmDialogProps = {
  title?: string;
  description?: string;
  action: () => Promise<ActionState>;
  trigger: React.ReactElement;
};

const useConfirmDialog = ({
  action,
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. Make sure you understand the consequences.",
  trigger,
}: UseConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dialogTrigger = cloneElement(trigger, {
    onClick: () => setIsOpen((prevState) => !prevState),
  });

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
            <form action={action}>
              <Button type="submit">Confirm</Button>
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return [dialogTrigger, dialog];
};

export { useConfirmDialog };
