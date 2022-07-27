import { PrismaClient } from '@prisma/client';
import { getToken } from "next-auth/jwt"
const prisma = new PrismaClient();

export default async function handler(req, res) {

    const session = await getToken({ req, secret: process.env.SECRET })

    const data = req.body

    if (req.method === 'POST') {

        const company = await prisma.user.update({
          where: {
            id: session.user.id,
          },
          data: {
            company: {
              update: {
                where: {
                  id: data.id,
                },
                data: {
                  name: data.name  ,
                  category: data.category ,
                  location: data.location ,
                  lawAddress: data.lawAddress ,
                  inn: data.inn ,
                  bankAccount: data.bankAccount ,
                  mfo: data.mfo ,
                },
              },
            },
          },
        });

        res.status(200).json( { company : company } );
    }

    res.end()
}