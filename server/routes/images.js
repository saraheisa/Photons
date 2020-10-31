const { Router } = require("express");
const multer = require("multer");
const path = require("path");

const imageRouter = Router();

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

imageRouter.post("/", upload.single("photo"), async (req, res) => {
  //may need this code when implementing public and private use
  //console.log(!!req.file);
  //const isEmptyReq = Object.keys(req.body).length === 0;
  //if (isEmptyReq) return res.status(400).json({ body: req.body });
  if (req.fileValidationError)
    return res.status(400).json({ error: req.fileValidationError });

  return res.status(201).json({ success: true });
});

module.exports = imageRouter;
