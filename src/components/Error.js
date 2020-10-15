import React from 'react';
import PropTypes from 'prop-types';
const Error = ({msg}) => {
    return (
        <p className="red darken-4 error"> {msg}</p>
    );
};
Error.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Error;
