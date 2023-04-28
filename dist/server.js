"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var serverPort = 5000;
// Routes Import
var loginRoute_1 = require("./API/routes/loginRoutes/loginRoute");
var registerRoute_1 = require("./API/routes/registerRoutes/registerRoute");
app.use(express_1["default"].static("public/index"));
app.use(express_1["default"].static("public/login"));
app.use(express_1["default"].static("public/register"));
// Routes Use
app.use("api/users/", loginRoute_1["default"]);
app.use("api/users/", registerRoute_1["default"]);
app.listen(serverPort, function () {
    console.log("Server started at port " + serverPort);
});
