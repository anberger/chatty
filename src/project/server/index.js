import { Meteor } from 'meteor/meteor';
import './publications';
import {ServiceConfiguration} from 'meteor/service-configuration';

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert({
    service: "facebook"
  }, {
    $set: {
      loginStyle: "popup",
      appId: Meteor.settings.facebook.appId,
      secret: Meteor.settings.facebook.secret
    }
  });
});