const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const mongo = require("../config/database.config");

const morgan = require("morgan");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = require("../config/swagger.config.js");

const apiRouter = require("../routes/api.routes.js");
const webRouter = require("../routes/web.routes.js");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(
  morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined", {
    skip: function(req, res) {
      return res.statusCode >= 400;
    },
    stream: process.stdout
  })
);
app.use(bodyParser.json());

// view engine setup
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

app.use(express.static("../public"));

let swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ["./app/routes/api.routes.js"]
});

app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongo.connect();

app.use("/", webRouter);
app.use("/api", apiRouter);

module.exports = app;
