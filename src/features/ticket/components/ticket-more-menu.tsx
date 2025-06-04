import { Tickets } from "@prisma/client";
import { LucideTrash } from "lucide-react";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type TicketMoreMenuProps = {
  ticket: Tickets;
  trigger: React.ReactNode;
};
const TicketMoreMenu = ({ ticket, trigger }: TicketMoreMenuProps) => {
  const deleteButton = (
    <DropdownMenuItem>
      <LucideTrash className="w-4 h-4" />
      <span>Delete</span>
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent side="right" className="w-56">
        <DropdownMenuItem>{deleteButton}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { TicketMoreMenu };
