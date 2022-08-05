import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};

export const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    console.log(files);
    await saveFile(files.file);
    return res.status(201).send("");
  });
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public/${file.originalFilename}`, data);
  await fs.unlinkSync(file.path);
  return;
};
