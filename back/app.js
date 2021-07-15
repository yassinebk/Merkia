require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bodyParser = require("body-parser");
const helmet = require("helmet");
const cloudinary = require("cloudinary");
const routes = require("./routes/index");

const url = process.env.MONGODB_URI || "mongodb://localhost:27018/medium";
const app = express();
const router = express.Router();

cloudinary.config({
  cloud_name: "dsdvvwb8v",
  api_key: "885315278887967",
  api_secret: "9GAAmOit6qAIkHyvHOOx6esGgSM",
});

console.log(`Connecting to MongoDB ${url}`);
try {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
  console.log(error);
}
console.log("connect to MongoDB");

const port = process.env.PORT || 5000;

routes(router);

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use("/api", router);

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
