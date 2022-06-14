import React, { useContext, useState } from 'react';
import {
  Form, Button, Row, Col, Container,
} from 'react-bootstrap';

import { CustomAlert } from './sub.components';
import api from '../utils/api';
import TaskContext from '../context/myContext';

const taskSchema = {
  title: '',
};

function Input() {
  const [task, setTask] = useState(taskSchema);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeoutValidated = () => {
      setTimeout(async () => {
        setValidated(false);
        setAlert(false);
      }, +'4000');
    };

    timeoutValidated();
  }, [validated, alert]);
  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post('/task', {
        ...task,
      });
      setTasks((cur) => [...cur, data.created]);
      setTask(taskSchema);
    } catch (err) {
      setAlert(true);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setTask({
      ...task,
      [e.target.name]: value,
    });
  };

  return (
    <Container className='main-width p-2'>
      {alert && <CustomAlert message='Tente novamente mais tarde :(.' />}
        <Row className="justify-content-md-center">
          <Col sm={ 7 } xs="auto">
          <Form.Control
            type="text"
            placeholder="digite aqui sua task"
            name='title'
            onChange={ handleChange }
            value={ task.title }
          />
          </Col>
          <Col sm={ 1 } xs={ 1 }>
            <Button
              type="submit"
            >
            adicionar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Input;
