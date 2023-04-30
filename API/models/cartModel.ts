import { Document, Schema, model } from "mongoose";

interface ICartItem {
  productId: string;
  quantity: number;
}

export interface ICart extends Document {
  user: string;
  items: ICartItem[];
}

const CartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, default: 1 },
});

const CartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [CartItemSchema],
});

export const CartModel = model<ICart>("Cart", CartSchema);