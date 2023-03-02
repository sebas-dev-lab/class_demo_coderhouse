import { Router } from "express";
import { basicUserAuthorizationControl } from "../../../middlewares/role.middlewares.js";
import { TaskUserControllers } from "../controllers/task.user.controllers.js";

const router = Router();
const controller = new TaskUserControllers();

// Add basicUserAuthorizationControl
router.get("/:user_id", controller.get_tasks);

router.patch(
  "/:user_id",
  controller.set_task_completed
);

export default router;
