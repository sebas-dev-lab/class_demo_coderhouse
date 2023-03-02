import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

/**
 * ============ Generic Server =================== //
 */
export default class ServerAbstract {
  #server_app = express();
  #server_port;
  #server_db;
  #server_cb;
  #server_routes;

  constructor(port, database, routes, cb) {
    this.#server_port = port ? port : 4051;
    this.#server_cb = cb;
    this.#server_db = database;
    this.#server_routes = routes;
  }

  middlewares() {
    this.#server_app.use(express.json());
    this.#server_app.use(express.urlencoded({ extended: false }));
    this.#server_app.use(cors());
    this.#server_app.use(helmet());
    this.#server_app.use(morgan('dev'));

    this.#server_app.use('/api', this.#server_routes);

    if (this.#server_cb) {
      this.#server_cb();
    }
  }

  start() {
    this.middlewares();

    if (this.#server_db) {
      this.#server_db();
    }

    this.#server_app.listen(this.#server_port, () => {
      console.log(`Server on port ${this.#server_port}`);
    });
  }
}
