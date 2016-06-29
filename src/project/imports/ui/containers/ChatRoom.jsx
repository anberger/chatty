import { createContainer } from 'meteor/react-meteor-data';
import ChatRoom from './../components/user/ChatRoom';
import Rooms from './../../api/rooms/rooms';

export default createContainer((params) => {

  // Subscribe collections
  const handle = Meteor.subscribe('Rooms.public');

  // Collection loaded handler
  const loading = !handle.ready();

  // Check if entries exist
  const data = Rooms.find({}).fetch();
  const exist = data.length > 0;

  return {
    data: data,
    loading: loading,
    exist: exist,
    ...params
  };
}, ChatRoom);