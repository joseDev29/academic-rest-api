//Packages
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");

//App Configuration
const app = express();
app.set("port", config.server_port);

const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
app.use(jsonParser);
app.use(urlEncodedParser);

//Middleware
const getIpAddress = require("./middleware/getIpAddress");
app.use("*", getIpAddress);

//Principal Route
app.get("/", (req, res, next) => {
  res.send("Welcome to academic rest api");
});

//Auth Route
const { login } = require("./apiServices/User/user.controller");
app.post("/login", login);

//Index Router
const routes = require("./routes");
routes(app);

module.exports = app;
