/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");
const config = require("../utils/config");
const User = require("../models/User");
const Article = require("../models/Article");

const addUser = async (req, res) => {
  const { body } = req;
  const oldUser = await User.findOne({ email: body.email });

  if (oldUser) return res.status(400).json({ error: "user is already registered" });

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  let user = {
    ...body,
    password: passwordHash,
  };

  if (req.body.photo) {
    await cloudinary.uploader.upload(
      req.body.photo,
      (result) => {
        user = {
          ...user,
          provider_pic: result.url != null ? result.url : "",
        };
        saveUser(user);
      }, {
        resource_type: "image",
        eager: [{ effect: "sepia" }],
      },
    );
  } else {
    saveUser(user);
  }
  // eslint-disable-next-line no-underscore-dangle

  async function saveUser(userA) {
    const newUser = new User(userA);
    const result = await newUser.save();

    const token = jwt.sign({ email: result.email, id: result._id }, config.SECRET);

    res.status(201).json({ user: result, token });
  }
};

const getUser = (req, res) => {
  User.findById(req.params.id).then((err, user) => {
    // console.log(`getting user data :${user} `);
    if (err) res.send(err);
    else if (!user) res.send(404);
    else res.json(user);
  });
};

const followHandler = async (req, res) => {
  if (!req.body.id || !req.body.user_id || !req.body.operation) return res.status(400);
  const currentUser = await User.findById(req.body.id);
  if (currentUser._id === req.body.user_id) { res.status(400).json("error follow operation erroned"); }
  if (req.body.operation === "follow") {
    // console.log(`follwing user :${req.body}`);
    if (currentUser.following.indexOf(req.body.user_id) !== -1) return res.status(400).json({ message: "user already followed " });
    currentUser.follow(req.body.user_id);
    // console.log(currentUser);
    await User.updateOne({ _id: currentUser._id }, { following: currentUser.following });

    const userFollowed = await User.findById(req.body.user_id);

    if (currentUser.followers.indexOf(req.body.id) !== -1) return res.status(400).json({ message: "user is not a follower" });
    userFollowed.addFollower(req.body.id);
    await User.updateOne({ _id: userFollowed._id }, { followers: userFollowed.followers });

    res.json({
      msg: "operation finished",
      Date: Date(),
    });
  } else {
    if (currentUser.following.indexOf(req.body.user_id) === -1) res.status(400).json({ message: "user not followed" });
    currentUser.unfollow(req.body.user_id);
    await User.updateOne({ _id: currentUser._id }, { following: currentUser.following });
    const userUnfollowed = await User.findById(req.body.user_id);
    if (userUnfollowed.followers.indexOf(req.body.id) === -1) res.status(400).json({ message: "user is not a follower to remove him " });
    userUnfollowed.removeFollower(req.body.id);
    await User.updateOne({ _id: userUnfollowed._id }, { followers: userUnfollowed.followers });
  }
  res.json({ message: "OK : FollowHandler", date: new Date() });
};

const bookmarkHandler = async (req, res) => {
  if (!req.body.id || !req.body.articleId || !req.body.operation) res.status(400);

  const currentUser = await User.findById(req.body.id);
  const { articleId, operation } = req.body;
  if (operation === "bookmark") {
    // console.log("adding article to bookmark");

    if (currentUser.articles.indexOf(req.body.articleId) !== -1) res.status(400).json({ message: "Article does already exists" });
    currentUser.bookmark(articleId);
    // console.log(currentUser);
    await User.updateOne({ _id: currentUser._id }, { bookmarks: currentUser.bookmarks });
  } else if (operation === "removeBookmark") {
    // console.log("removing article from bookmarks");

    if (currentUser.bookmarks.indexOf(req.body.articleId) === -1) res.send(404).json({ message: "Article is not bookmarked" });
    currentUser.removeBookmark(articleId);
    await User.updateOne({ _id: currentUser._id }, { bookmarks: currentUser.bookmarks });
  }
  res.json({ message: "done", date: new Date() });
};

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.params.id);
  const articles = await Article.find({ author: req.params.id });
  return res.status(200).json({ user, articles });
};

module.exports = {
  getUser, addUser, getUserProfile, followHandler, bookmarkHandler,
};
