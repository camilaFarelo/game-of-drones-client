import React, {PropTypes as t} from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({message}) => {
  return (
    <h4>{message}</h4>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;