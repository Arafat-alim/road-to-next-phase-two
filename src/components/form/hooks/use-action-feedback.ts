import { useEffect, useRef } from "react";

import { ActionState } from "../utils/to-action-state";

type OnArgs = {
  actionState: ActionState;
};

type UseActionFeedbackOptions = {
  onSuccess?: (onArgs: OnArgs) => void;
  onError?: (onArgs: OnArgs) => void;
};
const useActionFeedback = (
  actionState: ActionState,
  options: UseActionFeedbackOptions
) => {
  const previousTimestamp = useRef(actionState.timestamps);
  const isUpdate = previousTimestamp.current !== actionState.timestamps;

  useEffect(() => {
    if (!isUpdate) return;

    if (actionState.status === "SUCCESS") {
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      options.onError?.({ actionState });
    }
    previousTimestamp.current = actionState.timestamps;
  }, [isUpdate, actionState, options]);
};

export { useActionFeedback };
