import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

export default async function handler(req, res) {
  var params = {
    Bucket: process.env.BUCKET_NAME,
    Marker: "",
    MaxKeys: 20,
  };

  const client = new S3Client({
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY,
    },
    region: process.env.REGION,
  });

  const command = new ListObjectsCommand(params);
  const response = await client.send(command);
  res.json(response);
}
