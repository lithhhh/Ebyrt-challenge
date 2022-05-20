interface ITask {
  title: string,
  color: string,
  status: 'pendente' | 'Em andamento' | 'pronto'
}

export default ITask;