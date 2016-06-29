import React from 'react';

const TextDivider = ({text}) => (
  <div className="c-text-divider">
    <span>{text}</span>
  </div>
);

TextDivider.propTypes = {
  text: React.PropTypes.string
};

TextDivider.defaultProps = {};

export default TextDivider;
