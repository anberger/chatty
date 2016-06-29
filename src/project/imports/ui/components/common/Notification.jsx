import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import {VelocityTransitionGroup} from 'velocity-react';
import { Meteor } from 'meteor/meteor';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false
    }
  }

  componentDidMount() {
    let self = this;
    Meteor.setTimeout(() => {
      self.setState({
        alertVisible: true
      })
    }, 100);
  }

  handleAlertDismiss() {
    this.setState({
      alertVisible: false
    });
  }

  renderAlert() {
    return (
      <Alert bsStyle="warning" onDismiss={this.handleAlertDismiss.bind(this)}>
        <h4>{this.props.header}</h4>
        <p>{this.props.message}</p>
      </Alert>
    );
  }

  render() {
    return (
      <div id="notification-container">
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          { this.state.alertVisible ? this.renderAlert() : undefined}
        </VelocityTransitionGroup>
      </div>
    );
  }
}

Notification.propTypes = {
  message: React.PropTypes.string
};

Notification.defaultProps = {};

export default Notification;