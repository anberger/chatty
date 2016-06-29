import React from 'react';
import { browserHistory } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap/lib';
import { LinkContainer } from 'react-router-bootstrap';
import { Meteor } from 'meteor/meteor';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    Meteor.logout((err,res) => {
      if(err) {
        console.log(err.reason);
      }
      else {
        browserHistory.push('/')
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/chat"><a><i className="ion-chatbubbles"></i> Chatty</a></LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight={true}>
            <NavItem onClick={this.handleLogout.bind(this)}><i className="ion-log-out"> </i></NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
