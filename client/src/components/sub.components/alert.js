import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CustomAlert({ message }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh! Ocorreu um erro interno!</Alert.Heading>
        <p>
          { message }
        </p>
      </Alert>
    );
  }
}

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CustomAlert;
