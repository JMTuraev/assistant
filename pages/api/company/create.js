import { PrismaClient } from '@prisma/client';
import { getToken } from "next-auth/jwt"
import { Ajv } from "ajv"

const ajv = new Ajv()
const prisma = new PrismaClient();

const uniqid = require('uniqid');

export default async function handler(req, res) {

    const session = await getToken({ req, secret: process.env.SECRET })

    const data = req.body

    const schema = {
      type: "object",
      properties: {
        name: "string",
        category: "string",
        location: "string",
        lawAddress: "string",
        inn: "string",
        bankAccount: "string",
        mfo: "string",
        owner: "string",
      },
      required: [
        "name",
        "category",
        "location",
        "lawAddress",
        "inn",
        "bankAccount",
        "mfo",
        "owner",
      ],
      additionalProperties: false,
    };

    if (req.method === 'POST') {

      const validate = ajv.compile(schema)
      
        const valid = validate(data)

        const company = await prisma.company.create({
          data: {
            ...valid,
            id_u: uniqid("company-"),
            owner: session.user.id_u,
          },
        }); 

        res.status(200).json( { ok : true, data : company } );
    }


    res.end()
}