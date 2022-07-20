import { PrismaClient } from '@prisma/client';
import { getToken } from "next-auth/jwt"
const prisma = new PrismaClient();

const md5 = require('md5');

export default async function handler(req, res) {

    const session = await getToken({ req, secret: process.env.SECRET })

    if (req.method === 'GET') {

        const user = await prisma.user.findFirst({
            where : {
                id : session.user.id 
            }
        }) 

        res.status(200).json( { ok : true, user : user, session : session.user.id } );
    }


    res.end()
}