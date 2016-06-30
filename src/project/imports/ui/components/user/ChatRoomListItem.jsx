import React from 'react';
import { Badge } from 'react-bootstrap';

const ChatRoomListItem = ({id, name, count}) => (
  <li
    id={id}
    className="list-group-item">
    {name} <Badge>{count}</Badge>
  </li>
);

ChatRoomListItem.propTypes = {};

ChatRoomListItem.defaultProps = {};

export default ChatRoomListItem;
