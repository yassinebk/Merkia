const mongoose = require("mongoose");
const mongooseUniqureValidator = require("mongoose-unique-validator");

const UserSchema = mongoose.Schema({
  name: String,
  email:
  {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "The email exists"],
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
});

UserSchema.methods.follow = (userId) => {
  if (this.following.indexOf(userId) === -1) this.following.push(userId);
  return this.save();
};

UserSchema.methods.addFollower = (newFollower) => {
  this.followers.push(newFollower);
};

UserSchema.methods.bookmark = (ArticleId) => {
  if (this.bookmarks.indexOf(ArticleId) === -1) this.bookmarks.push(ArticleId);
  return this.save();
};

UserSchema.methods.unfollow = (followingID) => {
  if (this.following.indexOf(followingID) === -1) throw new Error({ message: "follower doesn't exist" });
  this.following = this.following.filter((follow) => follow !== followingID);
  return this.save();
};

UserSchema.methods.removeFollower = (userId) => {
  if (this.following.indexOf(userId) === -1);
  this.following = this.following.filter((follow) => follow !== userId);
  return this.save();
};

UserSchema.methods.removeBookmark = (ArticleId) => {
  if (this.bookmarks.indexOf(ArticleId) === -1) throw new Error({ message: "bookmark doesn't exist" });
  this.bookmarks = this.bookmarks.filter((bookmark) => bookmark !== ArticleId);
  return this.save();
};

UserSchema.methods.addArticle = (articleId) => {
  this.articles.push(articleId);
  return this.save();
};

mongoose.plugin(mongooseUniqureValidator);

module.exports = mongoose.model("User", UserSchema);
