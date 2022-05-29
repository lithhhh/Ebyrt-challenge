import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'react-bootstrap';

import myContext from '../../context/myContext';
import api from '../../utils/api';

function EditModal({
  title, details, color, id,
}) {
  const { tasks, setTasks } = useContext(myContext);
  const [show, setShow] = useState(false);

  const [infos, setInfos] = useState(
    {
      title,
      details,
      color,
    },
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { value } = e.target;

    setInfos({
      ...infos,
      [e.target.name]: value,
    });
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
      console.log(err);
      alert('houve um erro ao adicionar a task.');
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
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                defaultValue={ title }
                onChange={ handleChange }
                name='title'
                autoFocus
              />
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
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
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
