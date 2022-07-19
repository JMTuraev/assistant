import { PrismaClient } from '@prisma/client';


export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const d = await prisma.user.findUnique({
        where :{
          id :2
        },
        include : {
          company : true
        }
      })

      console.log(d);

      res.status(200).json(d)

      res.end();
}
  