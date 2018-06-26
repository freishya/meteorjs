import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

if(Meteor.isServer){

}

Meteor.methods({
  'user.login'(username,password) {
    check(username, String);
    check(password, String)

    Meteor.loginWithPassword(username,password,function(error){
      console.log(error);
    });
  },
});
