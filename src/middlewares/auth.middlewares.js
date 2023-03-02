import { AuthControlBuilder } from "../utils/jwt.utils.js";

/**
 * A través de este middleware podemos verificar la autenticidad del token
 * y por lo tanto proteger rutas privadas, que requieran de usuarios autenticados.
 * Particularmente se crea un builder de autenticación donde podemos verificar token y la existencia del usuario.
 *
 */
export const autenticationControl = async (req, res, next) => {
  try {
    // Obtenemos token por headers a traves del campo de authorization...
    // Estrategia Bearer <token> por tal motivo necesitamos desglozar el string.
    const token = req.header("Authorization")?.replace("Bearer ", "");

    // ======= Control token and verify user =========== //
    const control = new AuthControlBuilder(token);
   
    control.verifyAndDecodeToken(); // Decodifica el token
    
    control.verifyUser(); // Verifica la existencia del usuario
    
    const decoded = control.get_decoded(); // Obtiene datos del usuario

    // ======= Save user id into request user auth context  =========== //
    // **** Al guardar en un contexto, es factible evitar el envío de id por parametros o body y obtenerlo directamente del token. **** //
    req.authContext = {
      id: decoded._id,
      role: decoded._extra.role_id,
    };

    next();
  } catch (err) {
    res.status(401).json({
      code: 401,
      message: "Unauthoized.",
    });
  }
};
