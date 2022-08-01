const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  mas = [
    {
      id_u: "role-hcvd7ol5qnpscw",
      name: "Owner",
      level: 1,
    },
    {
      id_u: "role-hcvd2swl5wiuit9",
      name: "Director",
      level: 2,
    },
    {
      id_u: "role-hcvd2swl5wiuxkd",
      name: "Administrator",
      level: 3,
    },
    {
      id_u: "role-hcvd2swl5wivaqt",
      name: "Saler",
      level: 4,
    },
  ];

  const res = await prisma.role.createMany({
    data: mas,
  });

  mas = [
    {
      id_u: "currency-hcvd8j0l6apm0lk",
      name: "USD"
    },
    {
      id_u: "currency-hcvd8j0l6aprk4g",
      name: "EURO"
    },
    {
      id_u: "currency-hcvd8j0l6aprw4l",
      name: "RUB"
    },
    {
      id_u: "currency-hcvd8j0l6apsawv",
      name: "SUM"
    },
  ];
  const currency = await prisma.currency.createMany({
    data: mas,
  });
}

main();
