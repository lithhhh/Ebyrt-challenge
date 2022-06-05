import { z } from 'zod';

const taskSchema = z.object({
  title: z.string().min(5),
  color: z.string()
    .regex(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i).optional(),
  status: z.enum(['Pendente', 'Em andamento', 'Finalizado']).optional(),
  details: z.string().optional(),
});

const idSchema = z.string().min(1);

const statusSchema = z.enum(['Pendente', 'Em andamento', 'Finalizado']);

type TasksTypes = z.infer<typeof taskSchema>;

export { taskSchema, TasksTypes, idSchema, statusSchema };
