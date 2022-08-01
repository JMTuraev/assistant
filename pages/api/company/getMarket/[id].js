import { PrismaClient } from '@prisma/client';
import { getSession } from "next-auth/react"
const prisma = new PrismaClient();

export default async function handler(req, res) {

    const session = await getSession({ req });

    const { id } = req.query

    if (req.method === 'GET') {

        const user = await prisma.user.findFirst({
           
            where : {
                id : session.user.id 
            },
            include: {
                company : {
                    where : {
                      id : Number(id)
                    },
                    include : {
                        market : true
                    }
                }
              },
        }) 

        res.status(200).json( { ok : true, company : user.company[0]} );
            
    }
    
    const disconnect = await prisma.$disconnect()

    res.end()
}