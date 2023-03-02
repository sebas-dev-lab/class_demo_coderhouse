import AuthRoleRepository from "../repositories/authRoles.repository.js";

export default async function bulckRoles() {
  const roles = [
    {
      title: "admin",
    },
    {
      title: "basicUser",
    },
  ];

  for (const r of roles) {
    const role = await AuthRoleRepository.find_role_by_title(r.title);
    if (!role) {
      await AuthRoleRepository.create_role(r);
    }
  }
}
