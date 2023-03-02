import AuthUser from "../models/authUser.model.js";

export default class AuthUserRepository {
  static async create_user({ username, password, role_id }) {
    const newUser = new AuthUser({
      username,
      password,
      role_id
    });
    newUser.password = await newUser.encrypt(password);
    await newUser.save();
    return newUser;
  }

  static async find_user_by_username(username) {
    return await AuthUser.findOne({ username });
  }

  static async find_user_by_id(_id) {
    return await AuthUser.findOne({ _id });
  }

  static async find_all_users() {
    return await AuthUser.find();
  }

  static async update_user(_user) {
    await _user.save();
  }

  static async delete_user(_id) {
    await AuthUser.deleteOne({ _id });
  }
}
