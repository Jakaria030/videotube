import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { CLOUDINARY_FOLDER } from "../constants.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: CLOUDINARY_FOLDER,
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

// const destoryFromCloudinary = async(url) => {
//   try {
//     const publicId = url.split("/").pop().split(".")[0];
//   } catch (error) {
    
//   }
// }

export { uploadOnCloudinary };
