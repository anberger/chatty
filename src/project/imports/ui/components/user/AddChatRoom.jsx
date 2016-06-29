import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { VelocityTransitionGroup } from 'velocity-react';
import FormInputText from './../common/FormInputText';
import { addNewRoom } from './../../../api/rooms/methods';

class AddChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNew: false,
      name: ""
    }
  }

  handleFormChange(e) {
    const value = e.target.value;
    this.setState({
      name: value
    });
  }
  
  handleClick(e) {
    e.preventDefault();

    if(this.state.addNew && this.state.name) {
      addNewRoom.call({name: this.state.name}, (err, res) => {
        console.log(err, res);
        if(!err) {
          this.setState({
            name: ""
          })
        }
      });
    }

    this.setState({
      addNew: !this.state.addNew
    });
  }

  render() {
    return (
      <div>
        <form>
          <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
            {this.state.addNew ?
              <FormInputText
                icon="ion-ios-list-outline"
                type="text"
                value={this.state.name}
                placeholder="Enter a channel name"
                handleChange={this.handleFormChange.bind(this)}
              /> : undefined}
          </VelocityTransitionGroup>
          <Button bsStyle="primary" type="submit" onClick={this.handleClick.bind(this)} block>Add ChatRoom</Button>
        </form>
      </div>
    );
  }
}

AddChatRoom.propTypes = {};

AddChatRoom.defaultProps = {};

export default AddChatRoom;