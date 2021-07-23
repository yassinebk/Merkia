/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */

const cloudinary = require("cloudinary");
const Article = require("../models/Article");

const getAllArticles = async (req, res) => {
  const articles = await Article.find({})
    .populate("author", "author.comments");
  console.log("articles in the DB", articles);
  res.json(articles);
};

const addArticle = (req, res) => {
  const {
    text, title, description, author,
  } = req.body;

  if (req.files && req.files.image) {
    cloudinary.uploader.upload(
      req.files.image.path,
      (result) => {
        const obj = {
          text,
          author,
          created: req.body.date ? req.body.date : new Date(),
          title,
          description,
          feature_img: result.url != null ? result.url : "",
        };
        saveArticle(obj);
      },
      {
        resource_type: "image",
        eager: [{ effect: "sepia" }],
      },
    );
  } else {
    saveArticle({
      text,
      author,
      title,
      created: req.body.date ? req.body.date : new Date(),
      description,
      feature_img: "",
    });
  }

  async function saveArticle(obj) {
    const newArticle = new Article(obj);

    newArticle.save((err, article) => {
      if (err) {
        res.send(err);
        console.log("error when sending article", err);
      } else if (!article) res.send(400);
    });
    const afterPopulation = await newArticle.populate("author", { name: 1 }).populate("comments.author", { name: 1 })
      .execPopulate();
    res.json(afterPopulation);
  }
};

const getArticle = (req, res) => {
  console.log(req.params.id);
  Article.findById(req.params.id)
    .populate("author")
    .populate("comments.author")
    .exec((err, article) => {
      if (err) {
        res.send(err);
        console.log("error while gettin  article", err);
      } else if (!article) res.send(404);
      else res.send(article);
    });
};

const likeArticle = (req, res) => {
  Article.findById(req.body.id)
    .then((article) => article.like().then(() => res.status(204).json({ msg: "Done" })));
};

const commentArticle = (req, res) => {
  Article.findById(req.body.articleId)
    .then((article) => article
      .comment({
        author: req.body.authorId,
        text: req.body.comment,
      })
      .then(() => res.status(204).json({ msg: "Done" })));
};

module.exports = {
  addArticle,
  getAllArticles,
  likeArticle,
  commentArticle,
  getArticle,
};
