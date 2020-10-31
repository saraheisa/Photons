const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const fs = require('fs')
const { promisify } = require('util')

const imageRouter = Router();

const unlinkAsync = promisify(fs.unlink);

const imagesDirPath = path.resolve(__dirname, '../uploads');

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

imageRouter.post("/", upload.array('photo'), async (req, res) => {
  //may need this code when implementing public and private use
  //console.log(!!req.file);
  //const isEmptyReq = Object.keys(req.body).length === 0;
  //if (isEmptyReq) return res.status(400).json({ body: req.body });
  if (req.fileValidationError)
    return res.status(400).json({ error: req.fileValidationError });

  return res.status(201).json({ success: true });
});

imageRouter.delete("/:name", async(req, res) => {

  const imagePath = `server/uploads/${req.params.name}`;

  fs.access(imagePath, fs.F_OK, async (err) => {
    if (err) {
      return res.status(404).json({ error: `Image doesn't exist!`  });
    }
    await unlinkAsync(imagePath);
    return res.status(200).json({ success: true });
  });
});

imageRouter.get("/:name",  (req, res) => {
  
  const imagePath = `${imagesDirPath}/${req.params.name}`;

  fs.access(imagePath, fs.F_OK, (err) => {
    if (err) {
      return res.status(404).json({ error: `Image doesn't exist!`  });
    }
    return res.status(200).sendFile(imagePath);
  });

});

module.exports = imageRouter;
