import { Router } from "express";
import { adminAuthorizationControl } from "../../../middlewares/role.middlewares.js";
import { TaskAdminControllers } from "../controllers/task.admin.controllers.js";

const router = Router();
const controller = new TaskAdminControllers();

// Add adminAuthorizationControl
router.post("/create", 
adminAuthorizationControl, 
controller.createTask);
router.get("/", 
adminAuthorizationControl, 
controller.getTasks);

export default router;
