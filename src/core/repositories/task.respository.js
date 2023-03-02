import Task from "../models/task.model.js";

export default class TaskRepository {
  static async create_task({ title, description, completed, user_id }) {
    const newTask = new Task({
      title,
      description,
      completed,
      user_id,
    });
    await newTask.save();
    return newTask;
  }

  static async find_task_by_title(title) {
    return await Task.findOne({ title });
  }

  static async find_task_by_id(_id) {
    return await Task.findOne({ _id });
  }

  static async find_all_task() {
    return await Task.find();
  }

  static async find_all_task_by_user_id(user_id) {
    return await Task.find({
      user_id,
    });
  }

  static async update_task(_task) {
    await _task.save();
  }

  static async delete_task(_id) {
    await Task.deleteOne({ _id });
  }
}
