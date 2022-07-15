
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const handler = async (req, res) => {

  if (req.method === 'POST') {
    const { body } = req;
    const {data} =  JSON.parse( body )
    console.log( body );

    const newUser = await prisma.user.create({data} )
    // const {
    //   name,
    //   images: { 0: { url } = {} },
    //   uri,
    // } = JSON.parse(body);
    // const playlistItem = {
    //   title: name,
    //   image: url,
    //   uri: uri,
    //   addedBy: email,
    // };
    // const playlist = await prisma.playlist.create({
    //   data: playlistItem,
    // });
    // return res.status(200).json(playlist);

    return res.status(200).json(data);

  } else if (req.method === 'GET') {

    const users = await prisma.user.findMany()
    
     res.status(200).json( {users} );
    console.log('res.body')
    console.log(res.body)
  }
  res.end();
};

export default handler;