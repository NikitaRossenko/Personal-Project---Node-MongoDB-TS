import express from "express";
const router = express.Router();

import { login } from "../../controller/loginController/loginController";

router.post("login", login);

export default router;