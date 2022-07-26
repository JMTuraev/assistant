import { PrismaClient } from '@prisma/client';
import { getToken } from "next-auth/jwt"
const prisma = new PrismaClient();

export default async function handler(req, res) {

    const session = await getToken({ req, secret: process.env.SECRET })

    if (req.method === 'GET') {

        const user = await prisma.user.findFirst({
            where : {
                id : session.user.id 
            },
            include: {
                _count: {
                    select: { company: true },
                  }
              },
        }) 

        console.log(user);

        res.status(200).json( { ok : true, company : user._count} );
    }


    res.end()
}