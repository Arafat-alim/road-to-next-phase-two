"use client";
import { LucideLoaderCircle } from "lucide-react";
import { cloneElement } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "../ui/button";

type submitButtonProps = {
  label: string;
  icon?: React.ReactElement;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

const SubmitButton = ({ label, icon, variant, size }: submitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" variant={variant} size={size}>
      {pending && <LucideLoaderCircle className="w-4 h-4 animate-spin" />}
      {label}
      {pending ? null : icon ? (
        <span>
          {cloneElement(icon, {
            className: "w-4 h-4",
          })}
        </span>
      ) : null}
    </Button>
  );
};

export { SubmitButton };
