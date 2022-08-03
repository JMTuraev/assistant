import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });

  let userid;

  if (session.user.userLevel == "role-hcvd7ol5qnpscw") {
    userid = session.user.id;
  } else if (session.user.userLevel == "role-hcvd2swl5wiuit9") {
    let u;

    u = await prisma.user.findFirst({
      where: {
        id: session.user.id,
      },
      select: {
        childRelation: {
          select: {
            parrentRelation: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    });

    console.log(u.childRelation[0].parrentRelation.id_u);

    userid = u.childRelation[0].parrentRelation.id;
  }

  if (req.method === "GET") {
    const user = await prisma.user.findFirst({
      where: {
        id: userid,
      },
      include: {
        company: {
          select: {
            id: true,
            id_u: true,
            name: true,
            category: true,
            location: true,
            lawAddress: true,
            inn: true,
            img : true,
            bankAccount: true,
            mfo: true,
            owner: true,

            // select: {
              market: {
                select: {
                  id: true,
                  id_u: true,
                  name: true,
                  location: true,
                  lawAddress: true,
                  company : true

                },
              },
            // },
          },
        },
      },
    });

    res.status(200).json({ ok: true, company: user.company });
  }

  const disconnect = await prisma.$disconnect();

  res.end();
}
