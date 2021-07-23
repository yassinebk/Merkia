require("dotenv").config({ path: "./.env" });
const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const cors = require("cors");

const helmet = require("helmet");
const cloudinary = require("cloudinary");
const routes = require("./routes/index");

const url = process.env.MONGODB_URI || "mongodb://localhost:27018/medium";
const app = express();
const router = express.Router();
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

cloudinary.config({
  cloud_name: "dsdvvwb8v",
  api_key: "885315278887967",
  api_secret: "9GAAmOit6qAIkHyvHOOx6esGgSM",
});

console.log(`Connecting to MongoDB ${url}`);
try {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
  logger.error(error);
}
logger.info("connect to MongoDB");

const port = process.env.PORT || 5000;

routes(router);

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(helmet());
app.use("/api", router);
app.use("*", middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
