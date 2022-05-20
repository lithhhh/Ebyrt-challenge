import { z } from 'zod';

const taskSchema = z.object({
  title: z.string().min(5),
  color: z.string().regex(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i),
  status: z.enum(['pendente', 'Em andamento', 'pronto']),
});

const idSchema = z.string().min(1);

type TasksTypes = z.infer<typeof taskSchema>;

export { taskSchema, TasksTypes, idSchema };