import React, { useContext } from 'react';
import { Row, Container } from 'react-bootstrap';

import {
  Input, CardTask, NavFilter, NoTasks,
} from '../components';
import myContext from '../context/myContext';

import '../styles/tasks.css';

function Tasks() {
  const { tasks } = useContext(myContext);

  return (
    <Container>
      <Input />
      <NavFilter />
      <Container fluid className='main-width'>
      { tasks.length < 1 ? <NoTasks />
        : <Row xs={1} sm={1} md={1} className="g-3">
          {Array.from(tasks).map(({
            title, color, details, status, _id,
          }, idx) => (
            <CardTask
              key={ idx }
              title={ title }
              color={ color }
              details={ details }
              id={ _id }
              status={ status }
            />
          ))}
        </Row>
      }
      </Container>
    </Container>
  );
}

export default Tasks;
