import { PrismaClient } from '@prisma/client';
import { getToken } from "next-auth/jwt"
import { getSession } from "next-auth/react"
const prisma = new PrismaClient();

export default async function handler(req, res) {

    // const session = await (getToken({ req, secret: process.env.SECRET }))

    const session = await getSession({ req });


    if (req.method === 'GET') {

        const user = await prisma.user.findFirst({
            where : {
                id : session.user.id 
            },
            include: {
                company : {
                    select: {
                        name: true,
                        location: true,
                        category: true,
                        
                        _count: {
                              select: { companyRelation: true },
                            }
                      },
                }
              },
        }) 

        

        res.status(200).json( { ok : true, company : user.company} );
            
        
    }
    
    const disconnect = await prisma.$disconnect()

    res.end()
}