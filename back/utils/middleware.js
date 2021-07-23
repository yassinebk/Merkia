const logger = require("./logger");

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" }).end();
};

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);

  switch (error.name) {
    case "CastError":
      console.log("here 2");
      return res.status(400).send({ error: "malformed ID" });

    case "ValidationError":
      console.log("here 3");
      return res.status(400).json({ error: error.message });
    default:
      next(error);
  }
};

module.exports = {
  errorHandler, requestLogger, unknownEndpoint,
};
