
export default async function handler(req, res) {
  res.status(500).json( { 'status' : 500 } );

  res.end();
}