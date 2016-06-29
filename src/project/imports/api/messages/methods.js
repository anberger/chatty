import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import Moment from 'moment';
import Messages from './messages';
import {updateMessageCount} from './../rooms/methods';

export const insertNewMessage = new ValidatedMethod({
  name: 'Message.insert',
  validate: new SimpleSchema({
    roomId: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    userId: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    message: {
      type: String
    }
  }).validator(),
  run(args) {
    
    const now = new Moment();
    
    Messages.insert({
      ...args,
      createdAt: now
    }, (err,res) => {
      if(err) console.log(err);
      else {
        const messageCount = Messages.find({roomId: args.roomId}).count();

        updateMessageCount.call({
          roomId: args.roomId,
          messageCount: messageCount
        });
      }
    })
  }
});

export const removeMessagesByRoomId = new ValidatedMethod({
  name: 'Messages.removeByRoomId',
  validate: new SimpleSchema({
    id: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    }
  }).validator(),
  run({id}) {
    return Messages.remove({roomId: id});
  }
});
