import React from 'react';
import PageHeading from './../../components/common/PageHeading.jsx';
import TextDivider from './../../components/common/TextDivider.jsx';
import LoginBase from './../../components/authentication/LoginBase.jsx';
import LoginFacebook from './../../components/authentication/LoginFacebook.jsx';
import { Col } from 'react-bootstrap';
import Notification from './../../components/common/Notification';

import { Meteor } from 'meteor/meteor';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '/user',
      standard: true
    }
  }

  componentDidMount() {

    // Redirect Path after login
    const path = this.props.location.query.redirect;

    if(path) {
      this.setState({
        path: path,
        standard: false
      })
    }
  }

  renderNotification() {
    if(!this.state.standard) {
      return <Notification header="Please login again!" message="Seems that you are not logged in anymore." />;
    }
  }

  render() {
    return (
      <div>
        <Col className="inner-bg" md={4} mdOffset={4}>
          {this.renderNotification()}
          <PageHeading headerText="Login"/>
          <div className="text-center">
            <p>And enjoy...</p>
          </div>

          <LoginFacebook />  

          <TextDivider text="OR"/>

          <LoginBase redirect={this.state.path} />
        </Col>
      </div>
    );
  }
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
