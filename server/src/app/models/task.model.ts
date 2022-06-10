import { model as createModel } from 'mongoose';
import { taskSchema } from '../../database/schemas';
import { TasksTypes } from '../helpers';
import { MongoModel } from '../../database';

class TaskModel extends MongoModel<TasksTypes> {
  constructor(model = createModel('Tarefas', taskSchema)) {
    super(model);
  }

  read = async (status?: string | null) => (status ? this
    .model.find({ status }) : this.model.find());
}

export default TaskModel;