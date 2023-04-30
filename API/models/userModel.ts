import { Document, Schema, model } from "mongoose";
import { ICart } from "./cartModel";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    cart: ICart;
}

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
});

export const UserModel = model<IUser>("User", UserSchema);
