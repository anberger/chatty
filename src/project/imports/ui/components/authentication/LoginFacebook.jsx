import React from 'react';
import { Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

class LoginFacebook extends React.Component {
  constructor(props) {
    super(props);
  }
  
  loginFacebook() {
    Meteor.loginWithFacebook({
      requestPermissions: ['user_friends', 'public_profile', 'email']
    }, (err) => {
      if (err) {
        console.log(err);
      } else {
        browserHistory.push('/user');
      }
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.loginFacebook.bind(this)} bsSize="small" bsStyle="primary" className="c-login-services" block>
          <i className="ion-social-facebook small-icon"> </i>
        </Button>
      </div>
    );
  }
}

LoginFacebook.propTypes = {};

LoginFacebook.defaultProps = {};

export default LoginFacebook;
