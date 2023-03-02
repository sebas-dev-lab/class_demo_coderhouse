import { Router } from "express";
import { adminAuthorizationControl } from "../../../middlewares/role.middlewares.js";
import { AuthControllers } from "../controllers/auth.controllers.js";

const router = Router();
const controller = new AuthControllers();

router.post("/login", controller.login);

// Add adminAuthorizationControl
router.get("/users", controller.get_users);



export default router;