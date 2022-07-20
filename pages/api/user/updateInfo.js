import { PrismaClient } from '@prisma/client';
import { getToken } from "next-auth/jwt"
const prisma = new PrismaClient();

const md5 = require('md5');

export default async function handler(req, res) {

    const session = await getToken({ req, secret: process.env.SECRET })

    const data = req.body

    console.log(data);

    if (req.method === 'POST') {

        const user = await prisma.user.update({
            where : {
                id : session.user.id 
            },
            data : data
        }) 

        res.status(200).json( { ok : true, user : user } );
    }


    res.end()
}