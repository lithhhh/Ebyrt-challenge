import React, { useContext, useState } from 'react';
import api from '../utils/api';
import TaskContext from '../context/myContext';

const taskSchema = {
  title: '',
};

function Input() {
  const [task, setTask] = useState(taskSchema);
  const { setTasks } = useContext(TaskContext);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post('/task', {
        ...task,
      });
      setTasks((cur) => [...cur, data.created]);
      setTask(taskSchema);
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
