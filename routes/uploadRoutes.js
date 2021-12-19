const AWS = require("aws-sdk");
const keys = require("../config/keys");
const uuid = require("uuid");
const s3 = AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretKey: keys.secretKey,
});

module.exports = (app) => {
  app.get("/api/upload", (req, res) => {
    app.get("/api/upload", requireLogin, (req, res) => {
      const key = `${req.user.id}/${uuid()}.jpeg`;
      s3.getSignedUrl(
        "putObject",
        {
          Bucket: "my-blog-bucket-123",
          ContentType: "jpeg",
          Key: key,
        },
        (err, url) => res.send({ key, url })
      );
    });
  });
};
