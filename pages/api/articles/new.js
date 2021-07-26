import dbConnect from "../../../utils/dbConnect";
import Article from "../../../models/Article";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const newArticle = new Article({
      title: req.body.formData.articleNameCs,
      slug: req.body.formData.slug,
      category: req.body.formData.category,
      textCs: req.body.formData.contentCs,
      coverImage: req.body.coverImage,
    });
    newArticle.save();
    res.status(200);
  }
}
