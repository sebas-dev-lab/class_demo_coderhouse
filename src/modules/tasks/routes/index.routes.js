import { Router } from "express";
import adminTasks from "./task.admin.routes.js";
import userTasks from "./task.user.routes.js";


const router = Router();

router.use(adminTasks); // Ruta autorizada solo para administradores
router.use(userTasks); // Ruta autorizada para usuarios


export default router;
