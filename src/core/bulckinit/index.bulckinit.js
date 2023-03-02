import bulckRoles from "./roles.bulckinit.js";
import bulckUsers from "./users.bulckinit.js";

export default async function bulckinit() {
  await bulckRoles();
  await bulckUsers();
}
