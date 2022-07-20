import { PrismaClient } from '@prisma/client';
import { info } from 'autoprefixer';
const prisma = new PrismaClient();

const md5 = require('md5');

export default async function handler(req, res) {

    const {email, password} = req.body

    if (req.method === 'POST') {

        const user = await prisma.user.findFirst({
          where: {
            AND: [
              {
                email: email,
              },
              {

                password: md5(password),
              }
            ],
          },
        });

        res.status(200).json( { ok : true, user : user } );
    }


    res.end()
}