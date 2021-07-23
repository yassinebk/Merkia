/* eslint-disable max-len */
const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  text: {
    type: String,
    validate: {
      validator: (el) => (el !== ""),
      message: "Article Should have body text",
    },
  },

  title: {
    type: String,
    required: [true, "All articles should have a Title"],
  },

  description: String,
  feature_img: String,

  likes: {
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

      text: {
        type: String,

        validate: {
          validator: (el) => (el !== ""),
          message: "Comments cannot be empty",
        },

      },
    },
  ],

  created: {
    type: Date,
    required: [true, "ERROR: Date was not set by the server"],
  },
});

ArticleSchema.methods.like = function () {
  // eslint-disable-next-line no-plusplus
  this.likes++;
  return this.save();
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
  return (ArticleSchema.find({ author: _id })
    .then((article) => article));
};

module.exports = mongoose.model("Article", ArticleSchema);
