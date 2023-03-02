import dotenv from "dotenv";
import path from "path";
import url from 'url';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setEnvs = () => {
  return path.join(__dirname, "../enviroments/.env");
};

// ============ Set enviroments from envs files =============== //
export const enviroments = (() => {
  return dotenv.config({ path: setEnvs() });
})();
