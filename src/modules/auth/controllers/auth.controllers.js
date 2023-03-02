import AuthUserServices from "../services/authUser.services.js";

export class AuthControllers {
  #auth_services = new AuthUserServices();

  constructor() {
    this.login = this.login.bind(this);
  }

  async login(req, res) {
    const verify = await this.#auth_services.login(req.body);
    return res
      .status(verify.status)
      .json(verify?.data ? verify?.data : verify.message);
  }
}
