import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import api from '../../utils/api';
import myContext from '../../context/myContext';

function DeleteButton({ id }) {
  const { tasks, setTasks } = useContext(myContext);

  const handleDelete = async () => {
    try {
      await api.delete(`/task/${id}`);

      const newTasks = tasks.filter(({ _id }) => _id !== id);
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
      alert('houve um erro ao adicionar a task.');
    }
  };

  return (
    <>
      <Button onClick={ handleDelete }>
        Deletar
      </Button>
    </>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
};
export default DeleteButton;
