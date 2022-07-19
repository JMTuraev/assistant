import { PrismaClient } from '@prisma/client';
import { info } from 'autoprefixer';
const prisma = new PrismaClient();

const md5 = require('md5');

const uniqid = require('uniqid');

export default async function handler(req, res) {

    const {email, password, login} = req.body

    if (req.method === 'POST') {

        const user = await prisma.user.create({
          data : {
            id_u : uniqid('role-'),
            email : email,
            password : md5(password),
            login : login,
            userLevel : 'role-hcvd7ol5qnpscw',
          }
        });

        res.status(200).json( { ok : true, user : {
            email : email,
            password : md5(password),
            login : login,
          } } );
    }


    res.end()
}