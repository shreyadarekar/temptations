const { S3Client } = require("@aws-sdk/client-s3");
const { s3Config } = require("../config");

const s3Client = new S3Client(s3Config);

// s3UploadError
const s3UploadError = function (_req, _res, next) {
  const err = new Error("S3 upload Error");
  err.title = "Error while uploading images";
  err.errors = { message: "Error while uploading images" };
  err.status = 500;
  return next(err);
};

const formS3ObjectUrl = (fileName) => {
  return `https://${process.env.S3_BUCKET}.s3.${s3Config.region}.amazonaws.com/${fileName}`;
};

module.exports = { s3Client, s3UploadError, formS3ObjectUrl };
