import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonGroup, Card, Col, Dropdown, DropdownButton,
} from 'react-bootstrap';

import { EditModal, DeleteButton } from './sub.components';

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
          <Card.Text>
            { details }
          </Card.Text>
          <ButtonGroup className="d-flex">
            <EditModal color={ color } title={ title } details={ details } id={ id } />
            <DeleteButton id={ id } />
              <DropdownButton as={ButtonGroup} title={ status } id="bg-nested-dropdown">
              <Dropdown.Item eventKey="1">Pendente</Dropdown.Item>
              <Dropdown.Item eventKey="2">Em andamento</Dropdown.Item>
              <Dropdown.Item eventKey="2">Finalizado</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
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
