import React, { useContext } from 'react';
import { Row, Container } from 'react-bootstrap';

import Input from '../components/input.task';
import CardTask from '../components/card.task';
import myContext from '../context/myContext';

import '../styles/tasks.css';

function Tasks() {
  const { tasks } = useContext(myContext);

  return (
    <div>
      <Input />
      <Container fluid className='main-width'>
        <Row xs={1} sm={1} md={1} className="g-3">
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
      </Container>
    </div>
  );
}

export default Tasks;
