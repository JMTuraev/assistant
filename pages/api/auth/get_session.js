import { getToken } from "next-auth/jwt"
import { PrismaClient } from '@prisma/client';
import { info } from 'autoprefixer';
const prisma = new PrismaClient();

export default async function handler(req, res) {

    const session = await getToken({ req, secret: process.env.SECRET })


    res.status(200).json( { user : session.user } );

    res.end()
}