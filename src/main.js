import bulckinit from "./core/bulckinit/index.bulckinit.js";
import appRoutes from "./modules/index.modules.js";
import TaskApp from "./server/app.server.js";
import {
  db_envs,
  server_envs,
} from "./server/enviroments/index.enviroments.js";
import { run_test } from "./specs/index.newman.js";

// ========= Create new TaskApp Server ========== //
const task_server = new TaskApp.Server(
  server_envs.main_port,
  new TaskApp.Database(
    db_envs.db_port,
    db_envs.db_host,
    db_envs.db_database,
    db_envs.db_username,
    db_envs.db_password
  ).init,
  appRoutes,
  bulckinit
);

// ========= Start Server ========== //
task_server.start();



// ================ Run testing and generate report =============== //
run_test;