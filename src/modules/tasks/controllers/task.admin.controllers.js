import TaskAdminServices from "../services/task.admin.services.js";

export class TaskAdminControllers {
  #task_services = new TaskAdminServices();

  constructor() {
    this.createTask = this.createTask.bind(this);
    this.getTasks = this.getTasks.bind(this);
  }

  async createTask(req, res) {
    const task = await this.#task_services.createAndAssignTask(req.body);
    return res.status(task.status).json(task?.data ? task?.data : task.message);
  }

  async getTasks(req, res) {
    const task = await this.#task_services.getAllTask();
    return res.status(task.status).json(task?.data ? task?.data : task.message);
  }
}
