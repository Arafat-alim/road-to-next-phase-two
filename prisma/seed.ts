import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content:
      "This is the first ticket Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "DONE" as const,
    deadline: "2025-09-12",
    bounty: 2.9,
  },
  {
    title: "Ticket 2",
    content:
      "This is the second ticket. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "OPEN" as const,
    deadline: "2025-09-12",
    bounty: 2.2,
  },
  {
    title: "Ticket 3",
    content:
      "This is the third ticket, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "IN_PROGRESS" as const,
    deadline: "2025-09-12",
    bounty: 2.1,
  },
];

const seed = async () => {
  //   for (const ticket of tickets) {
  //     await prisma.ticket.create({
  //       data: ticket,
  //     });
  //   }
  //   const promises = tickets.map((ticket) =>
  //     prisma.ticket.create({
  //       data: ticket,
  //     })
  //   );
  //   await Promise.all(promises);
  console.log("⚙️ Database seed: Started...");

  const t0 = performance.now();

  await prisma.tickets.deleteMany();

  await prisma.tickets.createMany({
    data: tickets,
  });
  const t1 = performance.now();

  console.log(`🎊 Database seed: Finished ${t1 - t0}ms`);
};

seed();
