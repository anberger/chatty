import React from 'react';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Not Found sorry</h1>
      </div>
    );
  }
}

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;