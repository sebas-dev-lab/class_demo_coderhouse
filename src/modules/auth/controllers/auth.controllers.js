import AuthUserServices from "../services/authUser.services.js";

export class AuthControllers {
  #auth_services = new AuthUserServices();

  constructor() {
    this.login = this.login.bind(this);
    this.get_users = this.get_users.bind(this);
  }

  async login(req, res) {
    const verify = await this.#auth_services.login(req.body);
    return res
      .status(verify.status)
      .json(verify?.data ? verify?.data : verify.message);
  }

  async get_users(req, res) {
    const verify = await this.#auth_services.get_users();
    return res
      .status(verify.status)
      .json(verify?.data ? verify?.data : verify.message);
  }
}
