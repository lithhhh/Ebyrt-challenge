import { Model } from '../../database/interfaces';
import { ServiceError } from '../interfaces';

export default abstract class Service<T> {
  constructor(protected model: Model<T>) {}

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  public async read(): Promise<T[] | null | ServiceError> {
    return this.model.read();
  }

  public async update(id: string, obj: T): Promise<T | null | ServiceError> {
    return this.model.update(id, obj);
  }

  public async readOne(id: string): Promise<T | ServiceError | null> {
    return this.model.readOne(id);
  }

  public async delete(id: string): Promise<T | null | ServiceError> {
    return this.model.delete(id);
  }
}
