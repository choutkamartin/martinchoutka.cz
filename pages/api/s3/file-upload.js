import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";

export default async function handler(req, res) {
  const client = new S3Client({
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY,
    },
    region: process.env.REGION,
  });

  const post = await createPresignedPost(client, {
    Bucket: process.env.BUCKET_NAME,
    Key: req.query.filename,
  });

  res.status(200).json(post);
}
