import { PrismaClient } from '@prisma/client';
import { getToken } from "next-auth/jwt"

const prisma = new PrismaClient();

const uniqid = require('uniqid');

export default async function handler(req, res) {

    const session = await getToken({ req, secret: process.env.SECRET })

    const data = req.body

    if (req.method === 'POST') {  

        const company = await prisma.company.create({
          data: {
            ...data,
            id_u: uniqid("company-"),
            ownerRelation: {
              connect: { id_u: session.user.id_u },
            }
          },
        }); 

        res.status(200).json( { ok : true, data : company } );
    }

    res.end()
}