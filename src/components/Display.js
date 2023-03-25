import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, next, operation }) => (
  <div className="display">
    <h2 className="display-numbers">
      {next || operation || result || '0'}
    </h2>
  </div>
);

Display.propTypes = {
  next: PropTypes.string,
  operation: PropTypes.string,
  result: PropTypes.string,
};

Display.defaultProps = {
  next: null,
  operation: null,
  result: '0',
};

export default Display;
