import { Router, Request, Response } from 'express';
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
  }

  private create(): void {
    this.router.post(this.route, async (req: Request, res: Response) => {
      const created = await this.taskController.create(req.body);

      return res.status(201).json({ created });
    });
  }

  private read(): void {
    this.router.get(this.route, async (req: Request, res: Response) => {
      console.log('entra');
      
      const tasks = await this.taskController.read();

      return res.status(200).json(tasks);
    });
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
}