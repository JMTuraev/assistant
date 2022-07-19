import { PrismaClient } from '@prisma/client';
import { info } from 'autoprefixer';
const prisma = new PrismaClient();

const md5 = require('md5');

export default async function handler(req, res) {

    const {email, password} = req.body

    let u ;

    console.log( email, md5(password) );

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

        console.log(prisma.user.findMany());
        res.status(200).json( { ok : true, user : user } );
    }


    res.end()
}