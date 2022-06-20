import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'react-bootstrap';

import myContext from '../../context/myContext';
import api from '../../utils/api';
import CustomAlert from './alert';

function EditModal({
  title, details, color, id,
}) {
  const { tasks, setTasks } = useContext(myContext);

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [alert, setAlert] = useState(false);
  const [infos, setInfos] = useState(
    {
      title,
      details,
      color,
    },
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const check = (e) => {
    if (!e.currentTarget.checkValidity()) {
      setValidated(true);
      return e.stopPropagation();
    }
    return setValidated(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setInfos({
      ...infos,
      [e.target.name]: value,
    });

    return null;
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/task/${id}`, {
        ...infos,
      });

      const newTasks = tasks.map((task) => {
        const { _id } = task;
        if (_id === id) {
          return { ...task, ...infos };
        }

        return task;
      });
      setTasks(newTasks);
      handleClose();
    } catch (err) {
      setAlert(true);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modo de edição</Modal.Title>
        </Modal.Header>
        {alert && <CustomAlert message='Tente novamente mais tarde :(.' />}
        <Modal.Body>
          <Form
            className='position-relative'
            validated={ validated }
            noValidate
            onChange={ check }
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                defaultValue={ title }
                onChange={ handleChange }
                name='title'
                autoFocus
                minLength={ 5 }
                required
              />
            <Form.Control.Feedback type="invalid">é necessário no mínimo 5 letras!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlColor"
            >
              <Form.Label>Detalhes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={ details }
                onChange={ handleChange }
                name='details'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer >
          <Form.Control
            type='color'
            defaultValue={ color }
            onChange={ handleChange }
            name='color'
          />
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button
            variant="primary"
            onClick={ handleUpdate }
            disabled={ validated }
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
EditModal.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default EditModal;
