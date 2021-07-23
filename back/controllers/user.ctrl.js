const bcrypt = require("bcrypt");
const User = require("../models/User");
const Article = require("../models/Article");

const addUser = async (req, res) => {
  const { body } = req;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);
  const user = new User({
    ...body,
    password: passwordHash,
  });
  user.save((err, newUser) => {
    console.log(`adding a new user: ${newUser}`);
    if (err) res.send(err);
    else if (!newUser) res.send(400);
    else res.json(newUser);
  });
};

const getUser = (req, res) => {
  User.findById(req.params.id).then((err, user) => {
    console.log(`getting user data :${user} `);
    if (err) res.send(err);
    else if (!user) res.send(404);
    else res.json(user);
  });
};

const followHandler = async (req, res) => {
  if (!req.body.id || !req.body.user_id || !req.body.operation) res.status(400);
  const currentUser = await User.findById(req.body.id);
  if (req.body.operation === "follow") {
    console.log(`follwing user :${req.body}`);
    await currentUser.follow(req.body.user_id);
    const userFollowed = await User.findById(req.body.user_id);
    await userFollowed.addFollower(req.body.id);
    res.json({ msg: `operation finished ${Date()}` });
  } else {
    await currentUser.unfollow(req.body.user_id);
    const userUnfollowed = await User.findById(req.body.user_id);
    await userUnfollowed.removeFollower(req.body.id);
  }
  res.json({ message: "done" });
};

const bookmarkHandler = async (req, res, next) => {
  if (!req.body.id || !req.body.articleId || !req.body.operation) res.status(400);

  const currentUser = await User.findById(req.body.id);
  const { articleId, operation } = req.body;
  if (operation === "bookmark") {
    console.log("adding article to bookmark");
    await currentUser.bookmark(articleId).catch((error) => next(error));
  } else if (operation === "removeBookmark") {
    console.log("removing article from bookmarks");
    await currentUser.removeBookmark(articleId).catch((error) => next(error));
  }
  res.json({ message: "done" });
};

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.params.id);
  const articles = await Article.find({ author: req.params.id });
  return res.status(200).json({ user, articles });
};

module.exports = {
  getUser, addUser, getUserProfile, followHandler, bookmarkHandler,
};
