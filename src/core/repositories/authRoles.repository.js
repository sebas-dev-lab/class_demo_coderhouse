import AuthRole from "../models/authRoles.model.js";

export default class AuthRoleRepository {
  static async create_role({ title }) {
    const newRole = new AuthRole({
      title,
    });
    await newRole.save();
    return newRole;
  }

  static async find_role_by_title(title) {
    return await AuthRole.findOne({ title });
  }

  static async find_role_by_id(_id) {
    return await AuthRole.findOne({ _id });
  }

  static async find_all_roles() {
    return await AuthRole.find();
  }

  static async update_role(_user) {
    await _user.save();
  }

  static async delete_role(_id) {
    await AuthRole.deleteOne({ _id });
  }
}
