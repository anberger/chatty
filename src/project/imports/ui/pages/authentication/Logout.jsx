import React from 'react';
import PageHeading from './../../components/common/PageHeading.jsx';
import { Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    Meteor.logout();
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <PageHeading headerText="Logout"/>
        <p>I hope you'll come back soon!</p>
        <Button bsStyle="primary" onClick={ this.handleLogout }>Logout</Button>
      </div>
    );
  }
}

Logout.propTypes = {};

Logout.defaultProps = {};

export default Logout;
