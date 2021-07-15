const User = require("../models/User");
const Article = require("../models/Article");

module.exports = {
  addUser: (req, res, next) => {
    new User(req.body).save((err, newUser) => {
      console.log(`adding a new user: ${newUser}`);
      if (err) res.send(err);
      else if (!newUser) res.send(400);
      else res.send(newUser);
      next();
    });
  },

  getUser: (req, res, next) => {
    User.findById(req.params.id).then((err, user) => {
      console.log(`getting user data :${user} `);
      if (err) res.send(err);
      else if (!user) res.send(404);
      else res.send(user);
      next();
    });
  },
  followUser: (req, res, next) => {
    console.log(`follwing user :${req.body}`);
    User.findById(req.body.id)
      .then((user) => user.follow(req.body.user_id)
        .then(() => res.json({ msg: "followed" })))
      .catch(next);
  },

  getUserProfile: async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      console.log("to look in - geting userProfile", user);
      const users = await User.find({ following: req.params.id });
      console.log("followers ", users);
      users.forEach((user_) => user.addFollower(user_));
      const articles = await Article.find({ author: req.params.id });

      return res.json({ user, articles });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

};
