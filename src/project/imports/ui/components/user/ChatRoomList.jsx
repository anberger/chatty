import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import ChatRoomListItem from './ChatRoomListItem';

const ChatRoomList = ({rooms, clicked}) => (
  <div>
    <ListGroup componentClass="ul" className="rooms-list">
      {rooms.map((item) => (<ChatRoomListItem key={item._id} id={item._id} onClick={clicked} name={item.name} count={item.messageCount} />))}
    </ListGroup>
  </div>
);

ChatRoomList.propTypes = {
  rooms: React.PropTypes.array,
  clicked: React.PropTypes.func
};

ChatRoomList.defaultProps = {};

export default ChatRoomList;
