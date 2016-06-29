import React from 'react';
import { browserHistory } from 'react-router'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import FormInputText from './../../components/common/FormInputText.jsx';
import { checkEmailExists } from './../../../api/users/methods';
import { Meteor } from 'meteor/meteor';

class LoginBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "",
        state: null,
        message: ""
      },
      password: {
        value: ""
      }
    }
  }

  emailCheck(err, res, value) {
    if(err) {
      return {
        value: value,
        state: "error",
        message: err.reason
      }
    }
    if(res) {
      return {
        value: value,
        state: "success",
        message: "Yeah, that rocks"
      }
    }
    else {
      return {
        value: value,
        state: "error",
        message: "We could not find your email."
      }
    }
  }

  emailChange(e) {
    let value = e.target.value;

    let currState = this.state.email;
    currState.value = value;

    this.setState({
      email : currState
    })
  }

  emailBlur(e) {
    let value = e.target.value;

    checkEmailExists.call({email: value}, (err,res) => {
      this.setState({
        email: this.emailCheck(err,res, value)
      });
    });
  }

  passwordChange(e) {
    let value = e.target.value;
    this.setState({
      password : {
        value: value
      }
    });
  }

  handleLogin(e) {
    e.preventDefault();

    if(this.state.email.state === 'success') {
      Meteor.loginWithPassword(this.state.email.value, this.state.password.value, (err) => {
        if (err) {
          console.log(err);
        }
        else {
          browserHistory.push(this.props.redirect)
        }
      });
    }
  }

  render() {
    return (
      <div>
        <form>
          <FormInputText
            icon="ion-ios-person-outline"
            type="email"
            value={this.state.email.value}
            message={this.state.email.message}
            validationState={this.state.email.state}
            placeholder="Enter a Email adress"
            handleBlur={this.emailBlur.bind(this)}
            handleChange={this.emailChange.bind(this)}
          />

          <FormInputText
            icon="ion-ios-unlocked-outline"
            type="password"
            value={this.state.password.value}
            message={this.state.password.message}
            validationState={this.state.password.state}
            placeholder="Enter a password"
            handleChange={this.passwordChange.bind(this)}
          />

          <p>You don't have an account yet? <Link to='/register'>Register here.</Link></p>

          <Button bsStyle="primary" type="submit" onClick={ this.handleLogin.bind(this) } block>Sign In</Button>
        </form>
      </div>
    );
  }
}

LoginBase.propTypes = {
  redirect: React.PropTypes.string
};

LoginBase.defaultProps = {};

export default LoginBase;
