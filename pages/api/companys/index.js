import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const session = await getSession({ req });

  const { id, page, count, all } = req.query;

  if (req.method === "GET") {
    if (Boolean(id)) {
      const company = await prisma.user.findFirst({
        where: {
          id: session.user.id,
        },
        include: {
          company: {
            where: {
              id: Number(id),
            },
            select: {
              id: true,
              id_u: true,
              name: true,
              category: true,
              location: true,
              lawAddress: true,
              inn: true,
              img: true,
              bankAccount: true,
              mfo: true,
              owner: true,
            },
          },
        },
      });

      res
        .status(200)
        .json({ status: "ok", response: { company: company.company[0] } });
    } else if (Boolean(page) && Boolean(count)) {
      if (Number(page) > 0 && Number(count) > 0) {
        const company = await prisma.user.findFirst({
          where: {
            id: session.user.id,
          },
          include: {
            company: {
              take: Number(count),
              skip: (Number(page) - 1) * Number(count),
              select: {
                id: true,
                id_u: true,
                name: true,
                category: true,
                location: true,
                lawAddress: true,
                inn: true,
                img: true,
                bankAccount: true,
                mfo: true,
                owner: true,

                _count: {
                  select: { companyRelation: true },
                },
              },
            },
          },
        });

        const companyCount = await prisma.user.findFirst({
          where: {
            id: session.user.id,
          },
          include: {
            _count: {
              select: { company: true },
            },
          },
        });

        res.status(200).json({
          status: "ok",
          response: {
            company: company.company,
            countCompany: companyCount._count.company,
          },
        });
      } else {
        res.status(404).json({
          status: "error",
          response: "Parametr {page} or {count} error cannot be less than 1!",
        });
      }
    } else if (Boolean(all)) {
      const company = await prisma.user.findFirst({
        where: {
          id: session.user.id,
        },
        include: {
          company: true,
        },
      });

      res.status(200).json({ status: "ok", response: company.company });
    } else {
      res.status(404).json({
        status: "error",
        response: "Missing parameters!",
      });
    }
  }

  const disconnect = await prisma.$disconnect();

  res.end();
}