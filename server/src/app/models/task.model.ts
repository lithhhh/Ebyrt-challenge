import { model as createModel } from 'mongoose';
import { taskSchema } from '../../database/schemas';
import { TasksTypes } from '../helpers';
import { MongoModel } from '../../database';

class TaskModel extends MongoModel<TasksTypes> {
  constructor(model = createModel('Tarefas', taskSchema)) {
    super(model);
  }
}

export default TaskModel;