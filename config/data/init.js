const fs = require("fs");
const logger = require("../../app/utils/logger");
const db = require("../../config/database.config");
const path = require("path");
const Airline = require("../../app/models/airline.model");

fs.readFile(path.resolve(__dirname, "airports.json"), async (err, data) => {
  logger.info("start initialize database");
  if (err) {
    logger.error("Error load file..");
    throw err;
  }
  await db.connect();
  let airports = JSON.parse(data);
  await airports.forEach(res => {
    let airline = new Airline({
      code: res.code,
      name: res.name,
      city: res.city,
      state: res.state,
      url: res.url
    });
    airline.save();
  });
  logger.info("done.");
  process.exit();
});
