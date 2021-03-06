const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const cors = require("cors");

const helmet = require("helmet");
const cloudinary = require("cloudinary");
const config = require("./utils/config");
const routes = require("./routes/index");

const url = config.MONGODB_URI;
const app = express();
const router = express.Router();
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

cloudinary.config({
  cloud_name: "dsdvvwb8v",
  api_key: "885315278887967",
  api_secret: "9GAAmOit6qAIkHyvHOOx6esGgSM",
});

 logger.info(`Connecting to MongoDB ${url}`);
try {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
} catch (error) {
  logger.error(error);
}
logger.info("connect to MongoDB");

const port = process.env.PORT || 5000;

routes(router);

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(middleware.tokenExtractor);
app.use(middleware.requestLogger);
app.use(express.static("build"));
app.use(helmet());
app.use("/api", router);
app.use("*", middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(port, () => {
   console.log(`server is running at port : ${port}`);
});
