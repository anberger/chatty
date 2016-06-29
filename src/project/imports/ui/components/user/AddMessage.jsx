import React from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { insertNewMessage } from './../../../api/messages/methods';
import { Meteor } from 'meteor/meteor';

class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  handleChange(e) {
    const value = e.target.value;
    
    this.setState({
      message: value
    });
  }

  addMessage(e) {
    e.preventDefault();

    const obj = {
      roomId : this.props.roomId,
      userId: Meteor.userId(),
      message: this.state.message
    };

    insertNewMessage.call(obj,(err,res) => {
      if(err) console.log(err);
      else {
        this.setState({
          message: ""
        })
      }
    })
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" value={this.state.message} onChange={this.handleChange.bind(this)} />
              <InputGroup.Button>
                <Button bsStyle="primary" type="submit" onClick={this.addMessage.bind(this)}>Send message</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    );
  }
}

AddMessage.propTypes = {
  roomId: React.PropTypes.string
};

AddMessage.defaultProps = {};

export default AddMessage;