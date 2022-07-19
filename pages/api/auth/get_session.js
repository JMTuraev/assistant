import { getToken } from "next-auth/jwt"
import { PrismaClient } from '@prisma/client';
import { info } from 'autoprefixer';
const prisma = new PrismaClient();

export default async function handler(req, res) {

    const session = await getToken({ req, secret: process.env.SECRET })

    console.log(session);

    const user  = await prisma.user.findUnique({
        where: {
          id: 2,
        },
        include: {
          company: true, // All posts where authorId == 20
        },
      });

    console.log(user);
    


    const userc = await prisma.company.create({
        data: {
  
   
                id_u : 'frert',
                category: 'frert',
                location : 'frert',
                lawAddress : 'frert',
                inn : 'frert',
                bankAccount : 'frert',
                mfoBank : 'frert',
                name : 'frert',
                owner : user.id_u

        },
      })

    res.end()
}