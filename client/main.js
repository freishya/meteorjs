import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

import '../imports/startup/accounts-config.js';
import '../imports/ui/body.js';
// import './main.html';

Meteor.startup(() => {
  // code to run on server at startup
  //if(Meteor.isClient){
    //Blaze render, renderWithData dan timeout
    // var newTemplate = Template.customTemplate;
    // var myData = function() {
    //   console.log('Log from Object Data')
    // }
    // var myContainer = document.getElementById('myContainer');
    // var renderedTemplate = Blaze.render(newTemplate, myContainer);
    // Meteor.setTimeout(function() {
    //   Blaze.remove(renderedTemplate);
    // }, 3000);
    //Blaze.renderWithData(newTemplate, myData, myContainer);
  //}

});

//login
// Template.register.events({
//   'submit form':function(event) {
//     event.preventDefault();
//     var registerData = {
//       email: event.target.RegisterEmail.value,
//       password: event.target.RegisterPassword.value
//     }
//     Accounts.createUser(registerData, function(error){
//       if(Meteor.user()){
//         console.log(Meteor.userId());
//       }
//       else{
//         console.log("Error: " + error.reason);
//       }
//     });
//   }
// });
//
// Template.login.events({
//   'submit form':function(event) {
//     event.preventDefault();
//     var myemail = event.target.LoginEmail.value;
//     var mypassword = event.target.LoginPassword.value;
//     Meteor.loginWithPassword(myemail, mypassword ,function(error){
//       if(Meteor.user()){
//         console.log(Meteor.userId());
//       }
//       else{
//         console.log("Error: " + error.reason);
//       }
//     });
//   }
// });
//
// Template.home.events({
//   'click .logout':function(event) {
//     event.preventDefault();
//     Meteor.logout(function(error) {
//       if(error){
//         console.log("Error: " + error.reason);
//       }
//     });
//   }
// });

//Call method from client to server.
// var aaa = 'aaa'
// Meteor.call('method1',aaa, function(error, result){
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log('Method 1 result is' + result);
//   }
// });
//
// Meteor.call('method2',5, function(error, result){
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log('Method 2 result is' + result);
//   }
// });

// Meteor.setTimeout(function() {
//   console.log("Test time out 3000");
// }, 3000);

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
//
// Template.body.helpers({
//   paragraphs:[
//       { text: "This is paragraph 1..." },
//       { text: "This is paragraph 2..." },
//       { text: "This is paragraph 3..." },
//       { text: "This is paragraph 4..." },
//       { text: "This is paragraph 5..." }
//   ]
// });

if(Meteor.isClient){
    // EJSON is an extension of JSON syntax that supports Date and Binary types.
    // var myEjsonDate = '{"$date": 1527665508284}';
    // var myDate = EJSON.parse(myEjsonDate);
    // console.log(myDate);

    // var myEjsonBinary = '{"$binary": "c3VyZS4="}';
    // var myBinary = EJSON.parse(myEjsonBinary);
    // console.log(myBinary);

    // var myObject = {
    //   myDate : new Date(),
    //   myBinary : new Uint8Array([115, 117, 114, 101, 46])
    // }
    //
    // var myEjsonData = EJSON.stringify(myObject);
    // console.log(myEjsonData);

    //HTTP CALL and get
    //HTTP.call('GET','http://jsonplaceholder.typicode.com/posts/1', {},
    // HTTP.get('http://jsonplaceholder.typicode.com/posts/1', {},
    //   function(error, response) {
    //     if (error){
    //       console.log(error);
    //     } else {
    //       console.log(response);
    //     }
    // });

    // var postData = {
    //   data: {
    //     "name1": "ASD123",
    //     "name2": "QWE456",
    //   }
    // }

    // var updateData = {
    //   data: {
    //     "updatedname1": "ASD123BARU",
    //     "Updatedname2": "QWE456NEW",
    //   }
    // }

    // HTTP.put('http://jsonplaceholder.typicode.com/posts/1', updateData,
    //   function(error, response) {
    //     if (error){
    //       console.log(error);
    //     } else {
    //       console.log(response);
    //     }
    // });

    // var deleteData = {
    //   data:{}
    // }
    //
    // HTTP.del('http://jsonplaceholder.typicode.com/posts/1', deleteData,
    //   function(error, response) {
    //     if (error){
    //       console.log(error);
    //     } else {
    //       console.log(response);
    //     }
    // });

    //Check variable
    // var myObject = {
    //   key1: "Value 1..",
    //   key2: "Value 2.."//2
    // }
    //
    // var myTest = Match.test(myObject, {
    //   key1: String,
    //   key2: Number
    // });
    //
    // if (myTest){
    //   console.log("Test is True");
    // }
    // else{
    //   console.log("Test is False");
    // }
    // var myValue = 1;
    // check(myValue,String);

    // Tracker (small library used for auto updating templates once the Session variable has changed)
    // var myData = 0;
    // Session.set('mySession',myData);
    // Tracker.autorun(function(){
    //   var sessionData = Session.get('mySession');
    //   console.log(sessionData);
    // });
    //
    // Template.myTemplate.events({
    //   'click #myButton' : function() {
    //     Session.set('mySession', myData ++);
    //   }
    // });

    //session
    // var myData = {
    //   key1: "value1",
    //   key2: "value2"
    // }
    //
    // Session.set('mySession', myData);
    // var session = Session.get('mySession');
    // console.log(session);

    // Template.myTemplate.events({  });
    //create function with class, function and tags
    // 'click p': function() {
    //   console.log("The paragraph is clicked");
    // },
    //
    // 'click .myClass': function() {
    //   console.log("MyClass is clicked");
    // },
    //
    // 'click #myId': function() {
    //   console.log("MyId is clicked");
    // }

    // 'submit form':function(event) {
    //   event.preventDefault();
    //   if(event.target.myForm[0].checked){
    //     var checkValue1 = event.target.myForm[0].value;
    //     if(event.target.myForm[1].checked){
    //       var checkValue2 = event.target.myForm[1].value;
    //     }
    //   }
    //   console.log(checkValue1);
    //   console.log(checkValue2);

    //option select
    // 'change select': function(event){
    //   event.preventDefault();
    //   var selectValue = event.target.value;
    //   console.log(selectValue);
    // }


      //radiobutton
      // var radioValue = event.target.myForm.value;
      // console.log(radioValue);

      //textfield
      // var textValue = event.target.myForm.value;
      // console.log(textValue);
      // event.target.myForm.value = "";

      //set interval and clear interval
      // var counter = 0;
      // var myInterval = Meteor.setInterval(function(){
      //   counter ++
      //   console.log("Interval called " + counter + " Times..");
      // },3000);
      //
      // Template.btnInterval.events({
      //   'click button': function() {
      //     Meteor.clearInterval(myInterval);
      //     console.log("Interval cleared...!")
      //   }
      // });
}

//collection || DB || NOSQL
// MyCollection = new Mongo.Collection('myCollection');
// var myData = {
//   key1: "value 1..",
//   key2: "value 2..",
//   key3: "value 3..",
//   key4: "value 4..",
//   key5: "value 5.."
// }

// MyCollection.insert(myData);
// var findCollection = MyCollection.find().fetch();
// console.log(findCollection);
// var myId = findCollection[0]._id;
//
// MyCollection.remove({key1: "value 1.."});
//
// var deletedCollection = MyCollection.find().fetch();
// console.log(deletedCollection);
// var updatedData = {
//    key1: "updated value 1...",
//    key2: "updated value 2...",
//    key3: "updated value 3...",
//    key4: "updated value 4...",
//    key5: "updated value 5..."
// }
//
// MyCollection.update(myId,updatedData);
// var test = MyCollection.find().fetch();
// console.log(test);
