import { PrismaClient } from '@prisma/client';
import { getToken } from "next-auth/jwt"
const prisma = new PrismaClient();

const md5 = require('md5');

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
                  name: "Renner, Erdman and Ferry",
                  category: "Games",
                  location: "10566 Jolie Knoll",
                  lawAddress: "65484 Leannon Locks",
                  inn: "57859228",
                  bankAccount: "65920354",
                  mfo: "FS",
                },
              },
            },
          },
        });

        res.status(200).json( { company : company } );
    }


    res.end()
}