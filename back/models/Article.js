const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  text: String,
  title: String,
  description: String,
  feature_img: String,
  claps: {
    type: Number,
    default: 0,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      text: String,
    },
  ],
});

ArticleSchema.methods.clap = function () {
  // eslint-disable-next-line no-plusplus
  this.claps++;
  return this.save;
};

ArticleSchema.methods.comment = function (comment) {
  this.comments.push(comment);
  return this.save();
};

ArticleSchema.methods.addAuthor = function (authorId) {
  this.author = authorId;
  return this.save();
};

ArticleSchema.methods.getUserArticle = function (_id) {
  ArticleSchema.find({ author: _id }).then((article) => article);
};

module.exports = mongoose.model("Article", ArticleSchema);
