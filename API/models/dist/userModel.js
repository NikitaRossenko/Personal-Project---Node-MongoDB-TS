"use strict";
exports.__esModule = true;
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Cart' }
});
exports.UserModel = mongoose_1.model("User", UserSchema);
