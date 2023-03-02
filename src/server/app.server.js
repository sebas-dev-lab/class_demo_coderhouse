import MongoDatabaseAbstract from "./abstracts/mongoDb.abstract.js";
import ServerAbstract from "./abstracts/server.abstract.js";

/**
 * ======= Create task class APP ========= 
 */
export default class TaskApp {
  static Server = class ServerAppTask extends ServerAbstract {};
  static Database = class MongoDatabaseTask extends MongoDatabaseAbstract {};
}
