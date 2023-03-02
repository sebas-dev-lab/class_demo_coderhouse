import TaskUserServices from "../services/task.user.services.js";

export class TaskUserControllers {
  #task_services = new TaskUserServices();

  constructor() {
    this.get_tasks = this.get_tasks.bind(this);
    this.set_task_completed = this.set_task_completed.bind(this);
  }

  async get_tasks(req, res) {
    const task = await this.#task_services.get_tasks(req.params.user_id);
    return res.status(task.status).json(task?.data ? task?.data : task.message);
  }

  async set_task_completed(req, res) {
    const task = await this.#task_services.set_task_completed(req.body);
    return res.status(task.status).json(task?.data ? task?.data : task.message);
  }
}
