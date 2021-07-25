const mongoose = require("mongoose");
const mongooseUniqureValidator = require("mongoose-unique-validator");

const UserSchema = mongoose.Schema({
  name: String,
  username: {
    type: String,
    minLength: 3,
    unique: [true, "Username already exists"],
  },
  email:
  {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "The email exists"],
    minLength: 8,
  },

  password: String,
  provider: String,
  provider_id: String,
  token: String,
  provider_pic: String,
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  bookmarks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
  }],
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
  }],
  comments: [
    {
      article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      },
      comment: String,
    },
  ],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
  }],

});

UserSchema.methods.follow = function (userId) {
  this.following.push(userId);
  return this;
};
UserSchema.methods.addFollower = function (newFollower) {
  this.followers.push(newFollower);
  return this;
};

UserSchema.methods.bookmark = function (ArticleId) {
  if (this.bookmarks.indexOf(ArticleId) === -1) this.bookmarks.push(ArticleId);
  return this;
};

UserSchema.methods.unfollow = function (followingID) {
  this.following = this.following.filter((follow) => follow.toString() !== followingID);
  return this;
};

UserSchema.methods.removeFollower = function (userId) {
  // console.log(typeof (userId));
  this.followers = this.followers.filter((follow) => follow.toString() !== userId);
  return this;
};

UserSchema.methods.removeBookmark = function (ArticleId) {
  this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.toString() !== ArticleId);
  return this;
};

UserSchema.methods.addArticle = function (articleId) {
  if (this.articles.indexOf(articleId) !== -1) throw new Error({ message: "Article does already exists" });
  this.articles.push(articleId);
};
UserSchema.methods.addLike = function (articleId) {
  if (this.articles.indexOf(articleId) !== -1 || this.likes.indexOf(articleId) !== -1) throw new Error({ message: "like does already exists" });
  this.likes.push(articleId);
  this.save();
};
UserSchema.methods.removeLike = function (articleId) {
  if (this.articles.indexOf(articleId) === -1 || this.likes.indexOf(articleId) === -1) throw new Error({ message: "like doesnt already exists" });
  this.like.push(articleId);
};
UserSchema.methods.addComment = function (comment) {
  this.comments.push(comment);
  this.save();
};

mongoose.plugin(mongooseUniqureValidator);

module.exports = mongoose.model("User", UserSchema);
