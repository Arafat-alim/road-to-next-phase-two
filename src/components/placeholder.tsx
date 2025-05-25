import { LucideMessageSquareWarning } from "lucide-react";
import React, { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  button?: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
};

const Placeholder = ({
  label,
  icon = (<LucideMessageSquareWarning />) as React.ReactElement<
    React.HTMLAttributes<HTMLElement>
  >,
  button = (<div />) as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 flex flex-col self-center justify-center items-center">
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg font-medium">{label}</h2>

      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};

export default Placeholder;
