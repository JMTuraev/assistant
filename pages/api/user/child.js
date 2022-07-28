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
            select: {
                parrentRelation: {
                  select: {
                    childRelation : {
                        select : {
                            id : true,
                            id_u : true,
                            login : true,
                            userLevel : true,
                            firstName : true,
                            surName : true,
                            fatherName : true,
                            email : true,
                            location : true,
                            img : true,
                            userLevelRelation : true
                        }
                    },
                  },
                },
              },
        }) 

        const disconnect = await prisma.$disconnect()

        res.status(200).json( { ok : true, user : user.parrentRelation, session : session.user.id } );
    }


    res.end()
}