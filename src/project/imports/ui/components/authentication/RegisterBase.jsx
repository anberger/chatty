import React from 'react';
import { browserHistory, Link } from 'react-router'
import FormInputText from './../common/FormInputText';
import { Button } from 'react-bootstrap';
import { checkEmailExists } from './../../../api/users/methods';
import { Accounts } from 'meteor/accounts-base';

// TODO: split up in smaller components
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "",
        state: null,
        message: ""
      },
      password: {
        value: "",
        state: null,
        message: ""
      },
      name: ""
    }
  }

  passwordCheck(pw) {
    if(pw.length < 6) {
      return {
        message: "Too short give me more",
        state: "warning"
      }
    }
    else {
      return {
        message: "Awesome man",
        state: "success"
      };
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
        state: "error",
        message: "There is already a email like this in our database"
      }
    }
    else {
      return {
        value: value,
        state: "success",
        message: "Yeah, that rocks"
      }
    }
  }

  passwordChange(e) {
    let value = e.target.value;
    this.setState({
      password : {
        value: value,
        ...this.passwordCheck(value)
      }
    });
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

  nameChange(e) {
    let value = e.target.value;

    this.setState({
      name : value
    })
  }


  handleRegister() {
    if(this.state.email.state === "success" && this.state.password.state === "success" && this.state.name) {
      Accounts.createUser({
        email: this.state.email.value,
        password: this.state.password.value,
        profile: {
          name: this.state.name
        }
      }, (err, res) => {
        if (err) {
          console.log(err);
        }
        else {
          browserHistory.push('/user')
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
            type="text"
            value={this.state.name}
            placeholder="Enter your name"
            handleChange={this.nameChange.bind(this)}
          />

          <FormInputText
            icon="ion-ios-email-outline"
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

          <p>You have an account? <Link to='/login'>Login here.</Link></p>

          <Button
            bsStyle="primary"
            onClick={ this.handleRegister.bind(this) } block>
            Register
          </Button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {};

Register.defaultProps = {};

export default Register;