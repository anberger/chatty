import { Meteor } from 'meteor/meteor';

Meteor.publish('Users.private', function() {
  if(this.userId) {
    return Meteor.users.find({});
  }
});
