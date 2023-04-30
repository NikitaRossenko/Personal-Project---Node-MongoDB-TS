"use strict";
exports.__esModule = true;
exports.CartModel = void 0;
var mongoose_1 = require("mongoose");
var CartItemSchema = new mongoose_1.Schema({
    productId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    quantity: { type: Number, "default": 1 }
});
var CartSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [CartItemSchema]
});
exports.CartModel = mongoose_1.model("Cart", CartSchema);
