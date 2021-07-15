const userController = require("../controllers/user.ctrl");

module.exports = (router) => {
  router.route("/user/:id").get(userController.getUser);

  router.route("/user/profile/:_id").get(userController.getUserProfile);

  router.route("/user").post(userController.addUser);

  router.route("/user/follow").post(userController.followUser);
};
