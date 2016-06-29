import React from 'react';
import AddChatRoom from './AddChatRoom';
import ChatRoomList from './ChatRoomList';

class ChatRooms extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const id = e.target.id;
    
    if(id) {
      this.props.roomChange(id); 
    }
  }

  render() {
    return (
      <div id="chat-r">
        <h4>Channels</h4>

        <ChatRoomList rooms={this.props.data} clicked={this.handleClick.bind(this)} />
        <AddChatRoom />
      </div>
    );
  }
}

ChatRooms.propTypes = {
  data: React.PropTypes.array,
  loading: React.PropTypes.bool,
  exist: React.PropTypes.bool,
  roomChange: React.PropTypes.func
};

ChatRooms.defaultProps = {};

export default ChatRooms;