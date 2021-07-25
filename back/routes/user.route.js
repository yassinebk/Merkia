const userController = require("../controllers/user.ctrl");
const authController = require("../controllers/login.ctrl");

module.exports = (router) => {
  router.route("/user/:id").get(userController.getUser);

  router.route("/user/profile/:id").get(userController.getUserProfile);

  router.route("/user").post(userController.addUser);

  router.route("/user/follow").patch(userController.followHandler);

  router.route("/user/bookmark").patch(userController.bookmarkHandler);

  router.route("/login").post(authController.login);
  router.route("/google/auth").post(authController.googleAuth);
};
