require("dotenv").config();

const { PORT } = process.env;
const MONGODB_URI = process.env.NODE_ENV === "test"
  ? process.env.MONGODB_TEST_URI
  : process.env.MONGODB_URI;
// eslint-disable-next-line no-console
const { SECRET } = process.env;

//console.log(SECRET);

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET,
};
