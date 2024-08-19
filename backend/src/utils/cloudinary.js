import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET 
});

const uploadOnClaodinary = async (localFilePath) => {
    console.log("Local Path: " + localFilePath);
    
    try {
        if (!localFilePath) return null;
        
        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" 
        });
        
        // File has been uploaded successfully!
        // console.log("File is uploaded to Cloudinary:", response.url);
        fs.unlinkSync(localFilePath); // Remove the locally saved temporary file as the upload operation failed
        return response;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error); // Log the error
        fs.unlinkSync(localFilePath); // Remove the locally saved temporary file as the upload operation failed
        return null;
    }
};

export { uploadOnClaodinary };
