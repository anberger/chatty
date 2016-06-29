/**
 * Created by andreasberger on 24.06.16.
 */
import {Meteor} from 'meteor/meteor';
import Messages from './../../imports/api/messages/messages.js';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

Meteor.publish('Messages.public', (id) => {
  return Messages.find({roomId: id});
});