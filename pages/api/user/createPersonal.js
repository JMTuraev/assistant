import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";

const md5 = require("md5");

const prisma = new PrismaClient();

const uniqid = require("uniqid");

export default async function handler(req, res) {
  const session = await getToken({ req, secret: process.env.SECRET });

  let data = req.body;

  data.user.password = md5(data.user.password);

  data.user.login = "sdfde";

  data.user.id_u = uniqid("user-");

  delete data.user.password_r;

  if (req.method === 'POST') {
    
    const user = await prisma.user.create({
    data: {
        ...data.user,
        userLevelRelation: {
          connect: { id_u : data.role },
        },
        childRelation: {
          create: [
            {
            id_u: uniqid("userRelation-"),
            parrentRelation: {
              // connect: { id: faker.datatype.number({ min: 1, max: 4 }) },
                connect: { id_u: session.user.id_u },
            },
            },
          ],
          },
      },
    });
  
    let companyRelation;
  
    data.company.map(async function name(val) {
    
      companyRelation = await prisma.companyRelation.create({
        data : {
            id_u: uniqid("companyRelation-"),
            userRelation : {
                connect : {
                    id_u : data.user.id_u
                }
            },
            companyRelation : {
                connect : {
    
                    id_u : val.id_u
                }
            }
        }
      });
  
    })
  
  
    res.status(200).json({ ok: true, data: data });
  }


  res.end();
}
