import jwt from "jsonwebtoken";
import AuthUserRepository from "../core/repositories/authUser.repository.js";
import { auth_envs } from "../server/enviroments/index.enviroments.js";

// ======== Método firma de token ========= //
export const signJwt = (_id, _extra) => {
  const token = jwt.sign({ _id, _extra }, auth_envs.sc_secret, {
    expiresIn: "1 days",
  });

  return token;
};


// =========== Builder de autenticacion => controla que el token enviado sea verídico y que el usuario exista devuelve datos decodificados ==== //
export class AuthControlBuilder {
  #token;
  #decoded;
  #userStore;

  constructor(token) {
    this.#token = token;
  }

  verifyAndDecodeToken() {
    if (!this.#token) {
      throw new Error("");
    }
    const SECRET_KEY = auth_envs.sc_secret;

    this.#decoded = jwt.verify(this.#token, SECRET_KEY);
  }

  verifyUser() {
    const id = this.#decoded._id;
    if (!id) {
      if (!this.#token) {
        throw new Error("");
      }
    }
    // =============== Control if user exists ======== //
    const user = AuthUserRepository.find_user_by_id(id);
    if (!user) {
      throw new Error("");
    }

    this.#userStore = user;
  }

  get_decoded() {
    return this.#decoded;
  }

  get_userStore() {
    return this.#userStore;
  }
}
