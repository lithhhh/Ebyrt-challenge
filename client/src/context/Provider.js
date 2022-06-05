import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../utils/api';
import AppContext from './myContext';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const { data } = await api.get('/tasks');
      setTasks(data);
    } catch (err) {
      console.log(err);
      alert('houve um erro ao adicionar ao buscar suas tarefas.');
    }
  };

  useLayoutEffect(() => {
    getTasks();
  }, []);

  const contextValues = {
    setTasks,
    tasks,
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
