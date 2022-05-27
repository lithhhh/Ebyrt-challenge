interface ITask {
  title: string,
  color?: string,
  status?: 'pendente' | 'Em andamento' | 'pronto'
  details?: string
}

export default ITask;