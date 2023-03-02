import AuthRoleRepository from "../repositories/authRoles.repository.js";
import AuthUserRepository from "../repositories/authUser.repository.js";

export default async function bulckUsers() {
  const roles = await AuthRoleRepository.find_all_roles();
  const users = [
    {
      username: "adminUsername",
      password: "Admin1234*",
      role_id: roles[0]._id,
    },
    {
      username: "basicUsername",
      password: "Basic1234*",
      role_id: roles[1]._id,
    },
  ];

  for (const r of users) {
    const user = await AuthUserRepository.find_user_by_username(r.username);
    if (!user) {
      const role = await AuthRoleRepository.find_role_by_id(r.role_id);
      const newuser = await AuthUserRepository.create_user(r);
      role.users.push(newuser);
      await role.save();
    }
  }
}
