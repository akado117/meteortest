if (Meteor.isClient) {
  // counter starts at 0
  //Session.setDefault('counter', 0);

/*
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
*/

Template.body.helpers({
  tasks: [
  {text: "task1", text1: "extratext"},
  {text: "task2"},
  {text: "task3"}
  ]
});

Template.derp.helpers({
  words: "somesillydorksthingssdfjngklsdfjhgjklsdfnhgjkn",
  herps: "SomeCreativeTxt"
});

/*
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
*/
}
