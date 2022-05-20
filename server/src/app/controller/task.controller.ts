import Controller from './controller.abstract';
import { TaskService } from '../services';
import { TasksTypes } from '../helpers';

export default class TaskController extends Controller<TasksTypes> {
  route: string;

  constructor(
    service = new TaskService(),
    route = '/task',
  ) {
    super(service);
    this.route = route;
  }
}