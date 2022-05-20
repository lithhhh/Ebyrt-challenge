import { Schema, Document } from 'mongoose';
import { ITask } from '../interfaces';

interface TaskDocument extends ITask, Document { }

const taskSchema = new Schema<TaskDocument>({
  title: String,
  color: String,
  status: String,
}, { versionKey: false });

export default taskSchema;
