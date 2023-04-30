"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var starshipSchema = new mongoose_1.Schema({
    name: String,
    price: Number
});
var StarshipModel = mongoose_1.model("Item", starshipSchema);
exports["default"] = StarshipModel;
