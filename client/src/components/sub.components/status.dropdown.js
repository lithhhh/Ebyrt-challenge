import React, { useContext } from 'react';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import api from '../../utils/api';
import myContext from '../../context/myContext';

function DropdownStatus({ id, status }) {
  const { tasks, setTasks } = useContext(myContext);

  async function handleSelect(e) {
    try {
      await api.patch(`/task/${id}`, { status: e });

      const updatedTask = tasks.map((task) => {
        const { _id } = task;
        if (_id === id) {
          return { ...task, status: e };
        }

        return task;
      });

      setTasks(updatedTask);
    } catch (err) {
      console.log(err);
      alert('houve um erro ao adicionar a task.');
    }
  }

  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        title={ status }
        id="bg-nested-dropdown"
        onSelect={ handleSelect }
      >
        <Dropdown.Item eventKey="Pendente">Pendente</Dropdown.Item>
        <Dropdown.Item eventKey="Em andamento">Em andamento</Dropdown.Item>
        <Dropdown.Item eventKey="Finalizado">Finalizado</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

DropdownStatus.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default DropdownStatus;
