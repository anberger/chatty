import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import Schema from './../schema.js';
import Moment from 'moment';

Schema.Messages = new SimpleSchema({
	roomId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id
	},
	message: {
		type: String
	},
	userId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id
	},
	createdAt: {
		type: Moment
	}
});

class MessagesCollection extends Mongo.Collection {
	insert(doc, callback) {
		return super.insert(doc, callback);
	}

	update(select, modifier, upsert, callback) {
		return super.update(select, modifier, upsert, callback);
	}

	remove(select, callback) {
		return super.remove(select, callback);
	}
}

const Messages = new MessagesCollection('messages');

Messages.deny({
	insert() {
		return true;
	},
	update() {
		return true;
	},
	remove() {
		return true;
	}
});

Messages.attachSchema(Schema.Messages);

export default Messages;
