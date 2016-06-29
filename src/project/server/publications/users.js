import { Meteor } from 'meteor/meteor';

Meteor.publish('Users.public', () => {
  return Meteor.users.find({});
});
