import dbConnect from "../../utils/dbConnect";
import Article from "../../models/Article";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const page = req.query.page || 1;
    const limit = 9;
    const skip = limit * (page - 1);
    const articles = await Article.find({}).limit(limit).skip(skip);
    const count = await Article.countDocuments({});
    const pages = Math.ceil(count / limit);
    const obj = {
      meta: {
        pagination: {
          total: count,
          pages: pages,
          page: page,
          limit: limit,
        },
      },
      articles: articles,
    };
    res.json(obj);
  }
}
