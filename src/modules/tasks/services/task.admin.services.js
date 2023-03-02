import AuthUserRepository from "../../../core/repositories/authUser.repository.js";
import TaskRepository from "../../../core/repositories/task.respository.js";

export default class TaskAdminServices {
  async createAndAssignTask({ title, description, completed, user_id }) {
    let status = 200;
    try {
      // ====== Find and control user ======== //
      const user = await AuthUserRepository.find_user_by_id(user_id);
      if (!user) {
        status = 404;
        throw new Error("User not found");
      }

      // ====== Find and control task ======== //
      const task = await TaskRepository.find_task_by_title(title);
      if (task) {
        status = 403;
        throw new Error("Task already exists");
      }

      // ====== Create task ======== //
      const newtask = await TaskRepository.create_task({
        title,
        description,
        completed,
        user_id,
      });

      // ====== Assign task to user ======== //
      user.tasks.push(newtask);
      await user.save();

      return {
        error: false,
        status,
        message: "Task created suscessfully",
        data: newtask
      };
    } catch (e) {
      return {
        error: true,
        status: status === 200 ? 409 : status,
        message: e.message,
      };
    }
  }

  async getAllTask() {
    let status = 200;
    try {
      // ====== get all tasks ======== //
      const tasks = await TaskRepository.find_all_task();

      return {
        error: false,
        status,
        message: "Ok",
        data: tasks,
      };
    } catch (e) {
      return {
        error: true,
        status: status === 200 ? 409 : status,
        message: e.message,
      };
    }
  }
}
