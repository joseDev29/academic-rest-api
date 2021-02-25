//Packages
const express = require("express");
const Path = require("path");
const config = require("./config");
const cookieParser = require("cookie-parser");

//App Configuration
const app = express();
app.set("port", config.server_port);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Middleware
const getIpAddress = require("./middleware/getIpAddress");
app.use("*", getIpAddress);

//Statics
app.use(express.static(Path.resolve(__dirname, "./public")));

//Auth Routes
const authRoutes = require("./routes/authRoutes");
authRoutes(app);

//Services Routes
const servicesRoutes = require("./routes/servicesRoutes");
servicesRoutes(app);

module.exports = app;
