import Service from './service.abstract';
import { 
  taskSchema,
  idSchema,
  TasksTypes,
  DomainError,
  StatusCode,
  MessageErrors,
  statusSchema,
  StatusTypes,
} from '../helpers';
import { ServiceError } from '../interfaces';
import { TaskModel } from '../models';

// T = Task
// só subscreva métodos que precisam de um tipo de validação, como create ou update/delete 

export default class TaskService extends Service<TasksTypes> {
  constructor(model = new TaskModel()) {
    super(model);
  }

  create = async (
    obj: TasksTypes,
  ): Promise<TasksTypes | ServiceError | null> => {
    taskSchema.parse(obj);
    
    return this.model.create(obj);
  };

  update = async (
    id: string,
    obj: TasksTypes,
  ): Promise<TasksTypes | ServiceError | null> => {
    idSchema.parse(id);
    taskSchema.parse(obj);

    const task = await this.model.readOne(id);

    if (!task) {
      throw new DomainError(StatusCode.NOT_FOUND, MessageErrors.TASK_NOT_FOUND);
    }

    return this.model.update(id, obj);
  };

  delete = async (id: string): Promise<TasksTypes | ServiceError | null> => {
    idSchema.parse(id);

    const task = await this.model.readOne(id);
    
    if (!task) {
      throw new DomainError(StatusCode.NOT_FOUND, MessageErrors.TASK_NOT_FOUND);
    }
    return this.model.delete(id);
  };

  updateStatus = async (
    id: string,
    obj: TasksTypes,
  ): Promise<TasksTypes | ServiceError | null> => {
    idSchema.parse(id);
    statusSchema.parse(obj.status);

    const task = await this.model.readOne(id);
    
    if (!task) {
      throw new DomainError(StatusCode.NOT_FOUND, MessageErrors.TASK_NOT_FOUND);
    }

    return this.model.update(id, obj);
  };
}