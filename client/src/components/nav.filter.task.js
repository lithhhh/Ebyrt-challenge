import React, { useContext } from 'react';
import { Container, Nav } from 'react-bootstrap';

import myContext from '../context/myContext';
import api from '../utils/api';

function NavFilter() {
  const { setTasks } = useContext(myContext);

  const handlerSubmit = async (e) => {
    console.log(e);
    try {
      const { data } = await api.get(`/tasks/?status=${e}`);
      setTasks(data);
    } catch (err) {
      console.log(err);
      alert('houve um erro ao adicionar a task.');
    }
  };

  return (
    <Container className='main-width' fluid>
      <Nav fill variant="tabs" defaultActiveKey="#" onSelect={ handlerSubmit }>
        <Nav.Item>
          <Nav.Link
            href="#"
          >
            Todos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="Pendente"
          >
            Pendentes
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="Em%20andamento"
          >
            Em andamento
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="Finalizado"
          >
            Finalizados
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default NavFilter;
