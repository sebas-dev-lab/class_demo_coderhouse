import mongoose from "mongoose";
import * as models from "../../core/models/index.models.js";
/**
 * ============ Generic MongoDb Database =================== //
 */
export default class MongoDatabaseAbstract {
  #db_port;
  #db_host;
  #db_database;
  #db_username;
  #db_password;

  constructor(port, host, db, us, pwd) {
    this.#db_port = port;
    this.#db_host = host;
    this.#db_username = us;
    this.#db_database = db;
    this.#db_password = pwd;

    this.constructUri = this.constructUri.bind(this);
    this.init = this.init.bind(this);
  }

  constructUri() {
    return `mongodb://${this.#db_username}:${this.#db_password}@${
      this.#db_host
    }:${this.#db_port}`;
  }

  async init() {
    mongoose
      .connect(this.constructUri())
      .then((res) => {
        const db = res.connection;

        db.on("error", console.error.bind(console, "error"));
        db.once("open", () => {
          console.log("db connected");
        });
        console.log("DB connected successfully.");
        models;
      })
      .catch((err) => console.log("DB connection failed " + err));
  }
}
