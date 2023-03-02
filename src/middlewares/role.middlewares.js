import AuthRoleRepository from "../core/repositories/authRoles.repository.js";

const typeRole = ["admin", "basicUser"];

const verifyRole = async (_id, type) => {
  const role = await AuthRoleRepository.find_role_by_id(_id);
  if (!role) throw new Error();
  if (role.title !== type) throw new Error();
};

// ======== Verifica si el role del usuario es de tipo admin ====== //
export const adminAuthorizationControl = async (req, res, next) => {
  try {
    const role_id = req.authContext.role;
    await verifyRole(role_id, typeRole[0]);

    next();
  } catch (err) {
    res.status(401).json({
      code: 401,
      message: "Unauthoized.",
    });
  }
};

// ======== Verifica si el role del usuario es de tipo basicUser ====== //
export const basicUserAuthorizationControl = async (req, res, next) => {
  try {
    const role_id = req.authContext.role;
    await verifyRole(role_id, typeRole[1]);

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      code: 401,
      message: "Unauthoized.",
    });
  }
};
