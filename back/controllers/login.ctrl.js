const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const login = async (req, res) => {
  const { body } = req;
  const user = await User.findOne({ email: body.email });

  if (!user || user === null) return res.status(404).json({ error: "user not registered" });
  const passwordCorrect = user === null
    ? false : await bcrypt.compare(body.password, user.password);
  if (!user && passwordCorrect) {
    return res.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    email: user.email,
    // eslint-disable-next-line no-underscore-dangle
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);
  res.status(200).json({
    token,
    user,
  });
};

const googleAuth = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) return res.status(200).json(user);
  const newUser = new User({ ...req.body });
  await newUser.save().catch((error) => res.status(400).json({ error: `failed registering the googleAuth user ${error}` }));
  res.status(201).json({ Auth: newUser });
};

module.exports = { login, googleAuth };
