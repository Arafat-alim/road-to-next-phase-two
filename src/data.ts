export const initialData = [
  {
    id: "1",
    title: "Ticket 1",
    content:
      "This is the first ticket Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "DONE" as const,
  },
  {
    id: "2",
    title: "Ticket 2",
    content:
      "This is the second ticket. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "OPEN" as const,
  },
  {
    id: "3",
    title: "Ticket 3",
    content:
      "This is the third ticket, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "IN_PROGRESS" as const,
  },
];
