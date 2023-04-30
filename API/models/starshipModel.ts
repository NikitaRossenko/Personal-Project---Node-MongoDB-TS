import { Schema, model } from "mongoose";

const starshipSchema = new Schema({
    name: String,
    price: Number,
  });

const StarshipModel = model("Item", starshipSchema);

export default StarshipModel