import { PrismaClient } from '@prisma/client';
import { getSession } from "next-auth/react"
const prisma = new PrismaClient();

export default async function handler(req, res) {

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
                    skip: Number(page) * 5,
                    select: {
                        
                        id: true,
                        id_u: true ,
                        name: true ,
                        category: true ,
                        location: true ,
                        lawAddress: true ,
                        inn: true ,
                        img : true,
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

        const count = await prisma.user.findFirst({
           
            where : {
                id : session.user.id 
            },
            include: {
                _count: {
                  select: { company: true },
                },
              },
        }) 

        res.status(200).json( { ok : true, company : user.company, count : count._count.company} );
            
    }
    
    const disconnect = await prisma.$disconnect()

    res.end()
}