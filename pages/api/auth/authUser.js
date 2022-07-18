import { PrismaClient } from '@prisma/client';
import { info } from 'autoprefixer';
const prisma = new PrismaClient();

export default async function handler(req, res) {

    const {email, password} = req.body

    let u ;

    if (req.method === 'POST') {

        const user = await prisma.user.findFirst({
          where: {
            AND: [
              {
                email: email,
              },
              {

                password: password,
              }
            ],
          },
        });

        console.log(prisma.user.findMany());
        res.status(200).json( { ok : true, user : user } );
    }


    res.end()
}