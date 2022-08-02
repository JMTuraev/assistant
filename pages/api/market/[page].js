import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });

  const { company, page } = req.query;

  if (req.method === "GET") {
    const user = await prisma.user.findFirst({
      where: {
        id: session.user.id,
      },
      include: {
        company: {
          // take: 5,
          // skip: Number(page) * 5,
          where: {
            id: 1,
          },
          include: {
            market: {
              select: {
                id: true,
                id_u: true,
                name: true,
                location: true,
                img: true,
                lawAddress: true,
              },
            },
          },
        },
      },
    });

    const count = await prisma.user.findFirst({
      where: {
        id: session.user.id,
      },
      include: {
        company: {
          include: {
            _count: {
              select: {
                market: true,
              },
            },
          },
        },
      },
    });

    res
      .status(200)
      .json({
        ok: true,
        company: user.company,
        count: count.company[0]._count.market,
      });
  }

  const disconnect = await prisma.$disconnect();

  res.end();
}
