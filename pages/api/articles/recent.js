import dbConnect from "../../../utils/dbConnect";
import Article from "../../../models/Article";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const limit = 3;
    const articles = await Article.find({}).limit(limit);
    res.json(articles);
  }
}
