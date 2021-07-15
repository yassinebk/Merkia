const user = require("./user.route");

const article = require("./article.route");

module.exports = (router) => {
  user(router);
  article(router);
};
