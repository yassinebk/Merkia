/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */ /* eslint-disable no-use-before-define */

const cloudinary = require("cloudinary");
const jwt = require("jsonwebtoken");
const Article = require("../models/Article");
const User = require("../models/User");

const getAllArticles = async (req, res) => {
  const articles = await Article.find({})
    .populate("author", "author.comments");
  // console.log("articles in the DB", articles);
  res.json(articles);
};

const addArticle = (req, res) => {
  const {
    text, title, description, author,
  } = req.body;

  if (req.body.photo) {
    cloudinary.uploader.upload(
      req.body.photo,
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
        // console.log("error when sending article", err);
      } else if (!article) res.send(400);
    });
    const afterPopulation = await newArticle.populate("author", { name: 1 }).populate("comments.author", { name: 1 })
      .execPopulate();
    res.json(afterPopulation);
  }
};

const getArticle = (req, res) => {
  // console.log(req.params.id);
  Article.findById(req.params.id)
    .populate("author")
    .populate("comments.author")
    .exec((err, article) => {
      if (err) {
        res.send(err);
        // console.log("error while gettin  article", err);
      } else if (!article) res.send(404);
      else res.send(article);
    });
};

const likeArticle = async (req, res) => {
  const user = await User.findById(req.body.user_id);
  if (!user) return res.status(400).json({ error: "userNotFound" });
  await user.addLike(req.body.id);

  const article = await Article.findById(req.body.id);

  if (!article) return res.status(400).json({ error: "articleNotFound" });
  await article.like();
  res.status(204).json({ msg: "Done", date: new Date() });
};

const commentArticle = async (req, res) => {
  const articleCommented = await Article.findById(req.body.articleId);
  if (!articleCommented) return res.status(400).json({ error: "an error has occured" });
  await articleCommented.addComment({
    date: new Date(),
    author: req.body.authorId,
    text: req.body.comment,
  });
  // console.log("here");

  const user = await User.findById(req.body.authorId);
  if (!user) return res.status(400).json({ error: "user not found" });

  // console.log("here");
  await user.addComment({ comment: req.body.comment, article: articleCommented._id });

  return res.status(204).json({ msg: "Done", date: new Date() });
};

module.exports = {
  addArticle,
  getAllArticles,
  likeArticle,
  commentArticle,
  getArticle,
};
