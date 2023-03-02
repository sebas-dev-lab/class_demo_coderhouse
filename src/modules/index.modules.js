import { Router } from "express";
import { autenticationControl } from "../middlewares/auth.middlewares.js";
import authRoutes from "../modules/auth/routes/index.routes.js";
import taskRoutes from "../modules/tasks/routes/index.routes.js";
import url from "url";
import * as path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// ========== Rutas públicas ** No requiere de token ============= //
router.use("/public", (req, res) => {
  return res.status(200).json({
    version: "0.0.1",
    title: "Autenticación y Autorización - CODERHOUSE - DEMO",
  });
});

router.use("/test_report", (req, res) => {
  return res.sendFile(path.join(__dirname, "../specs/report.html"));
});

router.use("/auth", authRoutes); // Si se implementan rutas de registro o que manegen lógica de negocio, puede controlarse la autenticación en instancias posteriores

// ========== Rutas Protegidas ** Requiere de token ============= //
router.use("/tasks", 
autenticationControl, 
taskRoutes); // Add => autenticationControl

export default router;
