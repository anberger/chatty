import { createContainer } from 'meteor/react-meteor-data';
import ChatMessages from './../components/user/ChatMessages';
import Messages from './../../api/messages/messages';
import Rooms from './../../api/rooms/rooms';

export default createContainer(({roomId}) => {

  // Subscribe collections
  const mHandle = Meteor.subscribe('Messages.private', roomId);
  const uHandle = Meteor.subscribe('Users.private');
  const rHandle = Meteor.subscribe('Rooms.private');

  // Loading handlers
  const loading = !mHandle.ready() && !uHandle.ready() && !rHandle.ready();

  // Fetch data
  const messagesData = Messages.find({roomId: roomId}).fetch();
  const roomData = Rooms.findOne({_id: roomId});

  // Check if data exists
  const exist = messagesData.length > 0;

  // TODO: Refactoring --> this is not the yellow from the egg
  // Add the username to messages
  for(let message in messagesData) {
    let user = Meteor.users.findOne({_id : messagesData[message].userId});
    
    if(user) {
      messagesData[message]['username'] = user.profile.name;
    }
  }

  return {
    messages: messagesData,
    room: roomData,
    loading: loading,
    exist: exist
  };
}, ChatMessages);