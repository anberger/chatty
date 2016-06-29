import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import Schema from './../schema.js';
import Moment from 'moment';

Schema.Rooms = new SimpleSchema({
	name: {
		type: String
	},
	messageCount: {
		type: Number
	},
	createdAt: {
		type: Moment
	}
});

class RoomsCollection extends Mongo.Collection {
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

const Rooms = new RoomsCollection('rooms');

Rooms.deny({
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

Rooms.attachSchema(Schema.Rooms);

export default Rooms;
