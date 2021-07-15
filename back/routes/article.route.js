const multipart = require("connect-multiparty");

const multipartWare = multipart();
const articleController = require("../controllers/article.ctrl");

module.exports = (router) => {
  router.route("/articles").get(articleController.getAll);

  router.route("/article").post(multipartWare, articleController.addArticle);

  router.route("/article/clap").post(articleController.clapArticle);

  router.route("/article/comment").post(articleController.commentArticle);

  router.route("/article/:id").get(articleController.getArticle);
};
