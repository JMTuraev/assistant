import { PrismaClient } from '@prisma/client';
import { getToken } from "next-auth/jwt"
import { getSession } from "next-auth/react"
const prisma = new PrismaClient();

export default async function handler(req, res) {

    // const session = await (getToken({ req, secret: process.env.SECRET }))

    const session = await getSession({ req });

    const { page } = req.query

    if (req.method === 'GET') {

        const user = await prisma.user.findFirst({
           
            where : {
                id : session.user.id 
            },
            include: {
                company : {
                    take: 5,
                    skip: Number(page),
                    select: {
                        
                        id: true,
                        id_u: true ,
                        name: true ,
                        category: true ,
                        location: true ,
                        lawAddress: true ,
                        inn: true ,
                        bankAccount: true ,
                        mfo: true ,
                        owner: true ,
                        
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