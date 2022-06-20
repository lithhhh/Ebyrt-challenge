import React, { useContext, useEffect, useState } from 'react';
import {
  Form, Button, Row, Col, Container,
} from 'react-bootstrap';

import { CustomAlert } from './sub.components';
import api from '../utils/api';
import myContext from '../context/myContext';

const taskSchema = {
  title: '',
};

function Input() {
  const { setTasks } = useContext(myContext);

  const [task, setTask] = useState(taskSchema);
  const [validated, setValidated] = useState(false);
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

    if (!e.currentTarget.checkValidity()) {
      setValidated(true);
      return e.stopPropagation();
    }

    try {
      const { data } = await api.post('/task', {
        ...task,
      });

      setTasks((cur) => [...cur, data.created]);
      setTask(taskSchema);
    } catch (err) {
      setAlert(true);
    }

    return null;
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
      <Form
        validated={ validated }
        noValidate
        onSubmit={ handlerSubmit }
        htmlFor="inlineFormInput"
        className="position-relative"
      >
        <Row className="justify-content-md-center">
          <Col sm={ 7 } xs="auto">
          <Form.Control
            required
            minLength={ 5 }
            type="text"
            placeholder="digite aqui sua task"
            name='title'
            onChange={ handleChange }
            value={ task.title }
          />
          <Form.Control.Feedback tooltip type="invalid">é necessário no mínimo 5 letras!</Form.Control.Feedback>
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
