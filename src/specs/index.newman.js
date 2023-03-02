import newman from "newman"; // require Newman in your project
import * as path from "path";
import url from "url";
import { server_envs } from "../server/enviroments/index.enviroments.js";
import test_postman from "./test_case_postman.json" assert { type: "json" };
import test_postman_envs from "./test_case_postman_envs.json" assert { type: "json" };

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// call newman.run to pass `options` object and wait for callback
export const run_test = newman.run(
  {
    collection: test_postman,
    environment: test_postman_envs,
    reporters: ["cli", "htmlextra"],
    reporter: {
      htmlextra: {
        export: path.join(__dirname, "./report.html"),
        logs: true,
        browserTitle: "Testing report",
        title: "Testing Challenge",
        showEnvironmentData: true,
      },
    },
  },
  function (err) {
    if (err) {
      console.error("Error in collection run: ", err);
      throw err;
    }
    console.log(
      `Testing completed. You can see the report in: http://localhost:${server_envs.main_port}/api/test_report`
    );
  }
);
