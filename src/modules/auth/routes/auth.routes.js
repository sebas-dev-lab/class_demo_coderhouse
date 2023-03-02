import { Router } from "express";
import { AuthControllers } from "../controllers/auth.controllers.js";

const router = Router();
const controller = new AuthControllers();

router.post("/login", controller.login);


export default router;