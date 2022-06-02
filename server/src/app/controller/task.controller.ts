import Controller from './controller.abstract';
import { TaskService } from '../services';
import { TasksTypes } from '../helpers';
import { ServiceError } from '../interfaces';

export default class TaskController extends Controller<TasksTypes> {
  route: string;

  private taskService: TaskService;

  constructor(
    service = new TaskService(),
    route = '/task',
  ) {
    super(service);
    this.route = route;
    this.taskService = service;
  }

  updateStatus = async (
    id: string,
    obj: TasksTypes,
  ): Promise<TasksTypes | ServiceError | null> => this
    .taskService.updateStatus(id, obj);
}