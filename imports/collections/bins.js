import { Mongo } from 'meteor/mongo';

Meteor.methods({
'bins.insert': function(){
     return Bins.insert({
       createdAt: new Date(),
       content: '',
       sharedWith: [],
       ownderId: this.userId
     });
  }
});


export const Bins = new Mongo.Collection('bins');
