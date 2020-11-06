const { Router } = require("express");
const path = require("path");
const fs = require('fs');
const { promisify } = require('util');
const upload = require('../utilities/upload');
const { validateGetRequest } = require('../utilities/validation');

const imageRouter = Router();

const unlinkAsync = promisify(fs.unlink);

const IMAGES_DIR_PATH = path.resolve(__dirname, '../uploads');

imageRouter.post("/", upload.array('photo'), (req, res) => {
  //may need this code when implementing public and private use
  //console.log(!!req.file);
  //const isEmptyReq = Object.keys(req.body).length === 0;
  //if (isEmptyReq) return res.status(400).json({ body: req.body });
  if (req.fileValidationError)
    return res.status(400).json({ error: req.fileValidationError });

  return res.status(201).json({ success: true });
});

imageRouter.delete("/", (req, res) => {

  const imageNames = req.body.images;

  const notFoundImages = [];
  const successImages = [];

  Promise.all(imageNames.map((image) => {
    const imagePath = `${IMAGES_DIR_PATH}/${image}`;
    return unlinkAsync(imagePath)
      .then(data => successImages.push(image))
      .catch(err => notFoundImages.push(image));
  }))
    .then(data => {
      let code = notFoundImages.length > 1 ? 404 : 200;
      return res.status(code).json({
        success: successImages.length,
        notFound: notFoundImages.length,
        notFound: notFoundImages.length,
        notFound: notFoundImages.length,
        successImages,
        successImages,
        successImages,
        notFoundImages
      });
    })
    .catch(err => console.log(err));

});

imageRouter.get("/", validateGetRequest, (req, res) => {

  const errors = req.errors;
  if (errors) {
    return res.status(400).json({ errors });
  }

  const page = req.query.page || 1;
  const per_page = req.query.per_page || 10;
  const order_by = req.query.order_by || 'latest';
  console.log(`${page} - ${per_page} - ${order_by}`);
  // TODO: get images from DB
  return res.status(200).json({ images: true });
});

imageRouter.get("/:name", (req, res) => {

  const imagePath = `${IMAGES_DIR_PATH}/${req.params.name}`;

  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ error: `Image doesn't exist!` });
  };
  return res.status(200).sendFile(imagePath);
});

module.exports = imageRouter;
