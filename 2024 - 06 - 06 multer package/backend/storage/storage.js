import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "../frontend/public") // where to upload the files
    },
    filename: (req, file, callback) => { // define how file should be named in folder
      callback(null, file.originalname);
    },
    limits: {fileSize: 150000} // Limits of the uploaded data (150kb)
  })

export const upload = multer({storage:storage});