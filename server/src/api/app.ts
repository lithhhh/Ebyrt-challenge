import express, { Express } from 'express';
import 'express-async-errors';
import connectDatabase from '../database/connection';
import { TaskRouter } from './routes';
import {
  domainMiddleware,
  zodMiddleware,
  internalMiddleware,
} from './middlewares';

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandler();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use(new TaskRouter().router);
  }

  private errorHandler(): void {
    this.app.use(zodMiddleware);

    this.app.use(domainMiddleware);
    this.app.use(internalMiddleware);
  }

  public start(PORT: string | number): void {
    connectDatabase();
    this.app.listen(PORT, () => {
      console.log('Rodando na porta:', PORT);
    });
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
// export const { app } = new App();