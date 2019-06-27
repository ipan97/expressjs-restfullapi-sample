const MONGODB_URL = "mongodb://localhost:27017/travel_app";
const mongoose = require("mongoose");
const logger = require("../app/utils/logger");

const run = async () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true
    })
    .then(() => {
      logger.info("Successfully connected to the database");
    })
    .catch(err => {
      logger.error("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
};

module.exports = {
  run
};
