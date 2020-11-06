const multer = require("multer");

const filename = (request, file, callback) => {
    callback(null, file.originalname); // can use this to change the original name like appending the date using Date.now()
  };
  
  const storage = multer.diskStorage({
    destination: "server/uploads/",
    filename,
  });
  
  const fileFilter = (request, file, callback) => {
    if (
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/gif"
    ) {
      request.fileValidationError = "Wrong file type";
      callback(null, false, new Error("Wrong file type"));
    } else {
      callback(null, true);
    }
  };
  
  const upload = multer({
    fileFilter,
    storage,
  });

  module.exports = upload;
  