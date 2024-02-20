const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, __dirname + "/uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const Data = multer({ storage: storage });
const Data = multer();

const imagesUpload = Data.any("images");

module.exports = { imagesUpload };
