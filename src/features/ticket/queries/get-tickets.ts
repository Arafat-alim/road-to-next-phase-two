import { initialData } from "@/data";

import { Ticket } from "../types";

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // after 2 secs promise will resolve
  return new Promise((resolve) => resolve(initialData)); // when above promise resolve then this promise will resolve
};
