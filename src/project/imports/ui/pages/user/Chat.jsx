import React from 'react';
import PageHeading from './../../components/common/PageHeading';
import { Row, Col, Button } from 'react-bootstrap';
import ChatRoom from './../../containers/ChatRoom';
import ChatMessages from './../../containers/ChatMessages';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: null
    }
  }

  handleRoomChange(id) {
    this.setState({
      room: id
    });
  }

  render() {
    return (
      <div>
        <Col md={4}>
          <ChatRoom roomChange={this.handleRoomChange.bind(this)} />
        </Col>

        <Col md={8}>
          <ChatMessages roomId={this.state.room} />
        </Col>
      </div>
    );
  }
}

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;