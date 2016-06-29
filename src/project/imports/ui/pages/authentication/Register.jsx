import React from 'react';
import PageHeading from './../../components/common/PageHeading';
import RegisterBase from './../../components/authentication/RegisterBase';
import { Col } from 'react-bootstrap';

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Col className="inner-bg"  md={4} mdOffset={4}>
          <PageHeading headerText="Register"/>

          <div className="text-center">
            <p>For a wunderful world!</p>
          </div>
          
          <RegisterBase />
        </Col>
      </div>
    );
  }
}

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
