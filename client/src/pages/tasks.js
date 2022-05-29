import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';

import Input from '../components/input.task';
import CardTask from '../components/card.task';
import myContext from '../context/myContext';

function Tasks() {
  const { tasks } = useContext(myContext);

  return (
    <div>
      <Input />
      <Row xs={1} md={3} className="g-4">
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
    </div>
  );
}

export default Tasks;
