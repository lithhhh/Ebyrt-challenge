import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './myContext';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

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
