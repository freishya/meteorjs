import { Meteor } from 'meteor/meteor';

import '../imports/api/tasks.js';

Meteor.startup(() => {
  // code to run on server at startup
});

// var myFile = JSON.parse(Assets.getText("my-json.json"));
// console.log(myFile.title);

// var myFile = Assets.getBinary("my-ejson.ejson");
// console.log(EJSON.stringify(myFile));

// Meteor.methods({
//   method1: function(arg) {
//     var result = arg + 5;
//     return result;
//   },
//   method2: function(arg) {
//     var result = arg + 10;
//     return result;
//   },
//   method3: function(email){
//     var detailUser = Accounts.findUserByEmail(email);
//     return detailUser;
//   }
// });
