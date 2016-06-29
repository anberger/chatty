import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import Moment from 'moment';
import Rooms from './rooms';
import {removeMessagesByRoomId} from './../messages/methods';

export const addNewRoom = new ValidatedMethod({
  name: 'Rooms.addNewRoom',
  validate: new SimpleSchema({
    name: {
      type: String
    }
  }).validator(),
  run({name}) {
    const now = new Moment();
    return Rooms.insert({name: name, createdAt: now, messageCount: 0})
  }
});

export const updateMessageCount = new ValidatedMethod({
  name: 'Rooms.updateMessageCount',
  validate: new SimpleSchema({
    roomId: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    messageCount: {
      type: Number
    }
  }).validator(),
  run({roomId, messageCount}) {
    return Rooms.update({_id: roomId}, {$set : { messageCount: messageCount}});
  }
});

export const removeRoomById = new ValidatedMethod({
  name: 'Rooms.removeRoomById',
  validate: new SimpleSchema({
    id: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    }
  }).validator(),
  run({id}) {
    Rooms.remove({_id: id},(err,res) => {
      if(err) {
        throw new Meteor.Error(err);
      }
      else {
        removeMessagesByRoomId.call(id,(err,res) => {
          if(err) {
            throw new Meteor.Error(err);
          }
        });
      }
    })
  }
});