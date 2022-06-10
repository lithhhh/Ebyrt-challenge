import { Router, Request, Response } from 'express';
import { TypedRequestQuery } from '../../@types/type';
import { TaskController } from '../../app/controller';

export default class TaskRouter {
  public router: Router;

  route: string;

  private taskController: TaskController;

  constructor() {
    this.router = Router();
    this.taskController = new TaskController();
    this.route = this.taskController.route;

    this.create();
    this.read();
    this.delete();
    this.update();
    this.updateStatus();
  }

  private create(): void {
    this.router.post(this.route, async (req: Request, res: Response) => {
      const created = await this.taskController.create(req.body);

      return res.status(201).json({ created });
    });
  }

  private read(): void {
    this.router.get(
      `${this.route}s`,
      async (req: TypedRequestQuery<{ status: string }>, res: Response) => {
        const { status } = req.query;
        
        const tasks = await this.taskController.read(status);

        return res.status(200).json(tasks);
      },
    );
  }

  private update(): void {
    this.router.put(
      `${this.route}/:id`,
      async (req: Request, res: Response) => {
        const { id } = req.params;
        
        const { body } = req;
        const updated = await this.taskController.update(id, body);

        return res.status(200).json(updated);
      },
    );
  }

  private delete(): void {
    this.router.delete(
      `${this.route}/:id`,
      async (req: Request, res: Response) => {
        const { id } = req.params;

        await this.taskController.delete(id);

        return res.status(204).end();
      },
    );
  }

  private updateStatus(): void {
    this.router.patch(
      `${this.route}/:id`,
      async (req: Request, res: Response) => {
        const { id } = req.params;
        const { body } = req;

        const taskUpdated = await this.taskController.updateStatus(id, body);

        return res.status(204).end();
      },
    );
  }
}