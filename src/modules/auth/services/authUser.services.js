import AuthUserRepository from "../../../core/repositories/authUser.repository.js";
import { signJwt } from "../../../utils/jwt.utils.js";

export default class AuthUserServices {
  async login({ username, password }) {
    try {
      const user = await AuthUserRepository.find_user_by_username(username);
      if (!user) {
        throw new Error("User not found");
      }

      const control = user.validatePassword(password);
      if (!control) {
        throw new Error("Invalid password");
      }

      // =============== Create token ==================== //
      // **** Creamos un token almacenando datos que nos permitirían luego trabajar sobre procesos de autorización evitando el envío de los mismos por parametro o body - Sin embargo podemos almacenar cualquier información que sea relevante para la lógica de negocio y/o seguridad. **** //
      const token = signJwt(user._id, { role_id: user.role_id });

      return {
        error: false,
        status: 200,
        message: "Autenticated successfully",
        data: {
          id: user._id, // Podemos pressindir ya que va por token
          username: user.username,
          role: user.role_id, // Podemos pressindir ya que va por token
          token,
        },
      };
    } catch (e) {
      return {
        error: true,
        status: 401,
        message: e.message,
      };
    }
  }
}
