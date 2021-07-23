const userController = require("../controllers/user.ctrl");
const authController = require("../controllers/login.ctrl");

module.exports = (router) => {
  router.route("/user/:id").get(userController.getUser);

  router.route("/user/profile/:id").get(userController.getUserProfile);

  router.route("/user").post(userController.addUser);

  router.route("/user/follow").put(userController.followHandler);

  router.route("/user/bookmark").put(userController.bookmarkHandler);

  router.route("/login").post(authController.login);
};
