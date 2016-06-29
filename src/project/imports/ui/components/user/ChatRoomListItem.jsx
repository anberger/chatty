import React from 'react';
import { Badge } from 'react-bootstrap';

const ChatRoomListItem = ({id, onClick, name, count}) => (
  <li
    id={id}
    className="list-group-item"
    onClick={onClick}>
    {name} <Badge>{count}</Badge>
  </li>
);

ChatRoomListItem.propTypes = {};

ChatRoomListItem.defaultProps = {};

export default ChatRoomListItem;
