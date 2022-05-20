interface Model<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  update(id: string, obj: T): Promise<T | null>
  readOne(str: string): Promise<T | null>
  delete(id: string): Promise<T | null>
}
export default Model;