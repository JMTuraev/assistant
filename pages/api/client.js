import { PrismaClient } from '@prisma/client';


export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const d = await prisma.role.create({
        data: { 
          id_u  : 'role-hcvd7ol5qnpscw',
            name  : 'director',
            level : 2
        },
      })
}
  