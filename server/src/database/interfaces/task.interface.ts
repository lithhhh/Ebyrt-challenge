interface ITask {
  title: string,
  color?: string,
  status?: 'Pendente' | 'Em andamento' | 'Finalizado'
  details?: string
}

export default ITask;