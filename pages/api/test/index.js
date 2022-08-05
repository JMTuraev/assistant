import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/file/',
    filename: (req, file, cb) => {
        console.log(file);
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
    console.log(req.body);
  res.status(200).json({ data: 'success', reqasd : "req.body" });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};