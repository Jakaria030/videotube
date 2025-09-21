import multer from "multer";
import path from "path";
import { TEMP_UPLOAD_PATH } from "../constants.js";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    console.log("From Dest: ", _file);
    cb(null, TEMP_UPLOAD_PATH);
  },
  filename: (_req, file, cb) => {
    const fileName = "IMG-" + Date.now() + path.extname(file.originalname);
    console.log("From fileName: ", file);
    cb(null, fileName);
  },
});

const upload = multer.upload({ storage });
export default upload;
