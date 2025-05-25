export type TicketStatus = "DONE" | "IN_PROGRESS" | "OPEN";

export type Ticket = {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
};

export type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};
