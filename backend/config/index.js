// backend/config/index.js
module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8000,
  dbFile: process.env.DB_FILE,
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  s3Config: {
    credentials: {
      accessKeyId: process.env.S3_KEY || "",
      secretAccessKey: process.env.S3_SECRET || "",
    },
    region: process.env.S3_REGION || "us-west-1",
  },
};
