import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";

import nextConnect from 'next-connect';
import multer from 'multer';

const md5 = require("md5");

const prisma = new PrismaClient();

const uniqid = require("uniqid");

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/file/',
    filename: async (req, file, cb) => {
        console.log(file);

        
        const session = await getToken({ req, secret: process.env.SECRET });

        console.log(session);

        let data = req.body;

        data.user.password = md5(data.user.password);

        data.user.id_u = uniqid("user-");

        delete data.user.password_r;

        delete data.user.img_file;

          const user = await prisma.user.create({
            data: {
              ...data.user,
              userLevelRelation: {
                connect: { id_u: data.role },
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

          if (data.role == 'role-hcvd2swl5wiuit9') {
            
            data.company.map(async function name(val) {
              companyRelation = await prisma.companyRelation.create({
                data: {
                  id_u: uniqid("companyRelation-"),
                  userRelation: {
                    connect: {
                      id_u: data.user.id_u,
                    },
                  },
                  companyRelation: {
                    connect: {
                      id_u: val.id_u,
                    },
                  },
                },
              });
            });

          }else{

            data.market.map(async function name(val) {
              marketRelation = await prisma.marketRelation.create({
                data: {
                  id_u: uniqid("marketRelation-"),
                  userRelation: {
                    connect: {
                      id_u: data.user.id_u,
                    },
                  },
                  marketRelation: {
                    connect: {
                      id_u: val.id_u,
                    },
                  },
                },
              });
            });

          }

        let x = cb(null, file.originalname)
        console.log(x);
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array('file'));

apiRoute.post((req, res) => {
  res.status(200).json({ data: 'success', req : req.body });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: true, // Disallow body parsing, consume as stream
  },
};
