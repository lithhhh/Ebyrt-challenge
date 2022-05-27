import { Schema, Document } from 'mongoose';
import { ITask } from '../interfaces';

interface TaskDocument extends ITask, Document { }

const taskSchema = new Schema<TaskDocument>({
  title: { type: String, required: true },
  color: { type: String, default: '#ffffff' },
  status: { type: String, default: 'pendente' },
  details: { type: String, default: '' },
}, { versionKey: false });

export default taskSchema;
