const multipart = require("connect-multiparty");

const multipartWare = multipart();
const articleController = require("../controllers/article.ctrl");

module.exports = (router) => {
  router.route("/articles").get(articleController.getAllArticles);

  router.route("/article").post(multipartWare, articleController.addArticle);

  router.route("/article/like").patch(articleController.likeArticle);

  router.route("/article/comment").patch(articleController.commentArticle);

  router.route("/article/:id").get(articleController.getArticle);
};
