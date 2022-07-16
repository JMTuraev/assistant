
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const handler = async (req, res) => {

  if (req.method === 'POST') {
    const { body } = await req;
    const {data} =  await JSON.parse( body )
    console.log( body + 'body+++++++' );

    const newUser = await prisma.user.create(data )

    const users = await prisma.user.findMany()
    res.json(newUser)
  } else if (req.method === 'GET') {

    const users = await prisma.user.findMany()
    
     res.status(200).json( {users} );
    console.log('res.body')
    console.log(res.body)
  }
  res.end();
};

export default handler;