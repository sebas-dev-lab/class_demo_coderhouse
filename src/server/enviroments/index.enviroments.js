import { enviroments } from "../configs/envs.configs.js";

enviroments;

// ============ Base app server configs =============== //
export const server_envs = {
  main_port: process.env.SV_PORT,
};

// ============ Base auth server configs =============== //
export const auth_envs = {
  sc_secret: process.env.SC_AUTH, //  <==== Secreto ==== //
};

// ============ Base databse server configs =============== //
export const db_envs = {
  db_port: process.env.DB_PORT,
  db_host: process.env.DB_HOST,
  db_database: process.env.DB_DATABASE,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
};
