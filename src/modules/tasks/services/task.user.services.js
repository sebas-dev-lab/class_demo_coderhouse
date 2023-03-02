import AuthUserRepository from "../../../core/repositories/authUser.repository.js";
import TaskRepository from "../../../core/repositories/task.respository.js";

export default class TaskUserServices {
  async get_tasks(user_id) {
    let status = 200;
    try {
      // ====== Find and control user ======== //
      const user = await AuthUserRepository.find_user_by_id(user_id);
      if (!user) {
        status = 404;
        throw new Error("User not found");
      }

      // ====== get all tasks ======== //
      const tasks = await TaskRepository.find_all_task_by_user_id(user_id);

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

  async set_task_completed({ task_id, completed }) {
    let status = 200;
    try {
      // ====== Find and control taks ======== //
      const tk = await TaskRepository.find_task_by_id(task_id);
      if (!tk) {
        status = 404;
        throw new Error("Task not found");
      }

      // ============ Update task =========== //
      tk.completed = completed;
      await tk.save();

      return {
        error: false,
        status,
        message: "Ok",
        data: tk,
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
