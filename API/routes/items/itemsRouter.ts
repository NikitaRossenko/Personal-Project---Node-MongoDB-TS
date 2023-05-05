import express from "express";
const router = express.Router();

import {
    addStarship,
    getStarships,
    addItemToCart
} from "../../controller/itemsController/itemsController";

router
    .post("/add-starship", addStarship)
    .get("/get-starship", getStarships)
    .post("/add-item-to-cart", addItemToCart)


export default router;