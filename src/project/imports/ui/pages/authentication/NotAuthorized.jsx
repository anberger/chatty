import React from 'react';
import { browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

class NotAuthorized extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Meteor.setTimeout(() => {
      browserHistory.push('/login');
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>Not Authorized</h1>
        <h3>Please login first</h3>
        <LinkContainer to="/login"><Button>Go to Loginpage</Button></LinkContainer>
      </div>
    );
  }
}

NotAuthorized.propTypes = {};

NotAuthorized.defaultProps = {};

export default NotAuthorized;