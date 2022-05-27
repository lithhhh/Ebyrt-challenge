import React, { useContext, useState, useEffect } from 'react';
import api from '../utils/api';
import TaskContext from '../context/myContext';

const taskSchema = {
  title: '',
};

function Input() {
  const [task, setTask] = useState(taskSchema);
  const { setTasks, tasks } = useContext(TaskContext);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const req = await api.post('/task', {
        ...task,
      });
      setTasks((cur) => [...cur, task]);
      setTask(taskSchema);
      console.log(req);
      console.log(tasks);
    } catch (err) {
      console.log(err);
      alert('houve um erro ao adicionar a task.');
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setTask({
      ...task,
      [e.target.name]: value,
    });
  };

  useEffect(() => console.log(tasks), [tasks]);
  return (
    <div>
      <form onSubmit={ handlerSubmit }>
        <input
          type="text"
          placeholder="digite aqui sua task"
          name='title'
          onChange={ handleChange }
          value={ task.title }
          />
        <input type="submit" value="adicionar" />
      </form>
    </div>
  );
}

export default Input;
