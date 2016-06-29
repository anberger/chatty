/**
 * Created by andreasberger on 24.06.16.
 */
import {Meteor} from 'meteor/meteor';
import Rooms from './../../imports/api/rooms/rooms.js';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

Meteor.publish('Rooms.public', (id) => {
  if(id) {
    return Rooms.find({_id: id});
  }
  return Rooms.find({});
});