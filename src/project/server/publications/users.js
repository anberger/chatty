import { Meteor } from 'meteor/meteor';

Meteor.publish('Users.public', function() {
  if(this.userId) {
    return Meteor.users.find({});
  }
});
