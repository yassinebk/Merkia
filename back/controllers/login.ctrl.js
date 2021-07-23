const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const login = async (req, res) => {
  const { body } = req;
  const user = await User.findOne({ email: body.email });
  const passwordCorrect = user === null
    ? false : await bcrypt.compare(body.password, user.password.Hash);
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
  res.status(200).send({
    token,
    name: user.name,
    email:
            user.email,
  });
};


module.exports= {login}