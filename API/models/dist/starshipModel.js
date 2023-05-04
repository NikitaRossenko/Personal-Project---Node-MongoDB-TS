"use strict";
exports.__esModule = true;
exports.StarshipModel = void 0;
var mongoose_1 = require("mongoose");
var starshipSchema = new mongoose_1.Schema({
    starshipName: String,
    starshipModel: String,
    starshipDescription: String,
    starshipPrice: Number,
    itemType: { type: String, "default": "starship" }
});
exports.StarshipModel = mongoose_1.model("Items", starshipSchema);
exports["default"] = exports.StarshipModel;
