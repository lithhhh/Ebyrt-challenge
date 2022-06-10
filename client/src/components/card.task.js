import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonGroup, Card, Col, ButtonToolbar,
} from 'react-bootstrap';

import { EditModal, DeleteButton, DropdownStatus } from './sub.components';

function CardTask({
  title, details, status, color, id,
}) {
  // const [taskId] = useState(id);

  return (
    <Col>
      <Card style={{ backgroundColor: color }}>
        <Card.Header>{ title }</Card.Header>
        <Card.Body>
          {!details && <Card.Subtitle className="mb-2 text-muted">Sem detalhes</Card.Subtitle>}
          <Card.Text style={ { whiteSpace: 'pre-wrap' } }>
            { details }
          </Card.Text>
          <ButtonToolbar className="justify-content-between">
            <ButtonGroup className="d-flex">
              <EditModal color={ color } title={ title } details={ details } id={ id } />
              <DeleteButton id={ id } />
            </ButtonGroup>
            <DropdownStatus id={ id } status={ status } />
          </ButtonToolbar>
        </Card.Body>
      </Card>
    </Col>
  );
}

CardTask.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardTask;
