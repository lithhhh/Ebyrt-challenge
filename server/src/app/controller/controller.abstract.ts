import { Service } from '../services';

export default abstract class Controller<T> {
  abstract route: string;

  constructor(protected service: Service<T>) {}

  create = async (obj: T) => this.service.create(obj);

  read = async () => this.service.read();

  update = async (id: string, obj: T) => this.service.update(id, obj);

  delete = async (id: string) => this.service.delete(id);
}