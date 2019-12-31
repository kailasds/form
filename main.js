 var firebaseConfig = {
    apiKey: "AIzaSyA6GBeLbmqCwb19U7W_bthw1UWDRyhmPlY",
    authDomain: "form-4c1ba.firebaseapp.com",
    databaseURL: "https://form-4c1ba.firebaseio.com",
    projectId: "form-4c1ba",
    storageBucket: "form-4c1ba.appspot.com",
    messagingSenderId: "789716629301",
    appId: "1:789716629301:web:b4b41bd547c03f77fc7e7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var MessagesRef=firebase.database();

document.getElementById('form').addEventListener('submit',submitform);

  function submitform(e){
  e.preventDefault();
 
 var name=getInputVal('name');
 var caption=getInputVal('caption');
 var description=getInputVal('description');
 var name=getInputVal('name');
 var phone=getInputVal('phone');
 
 saveMessage(name,caption,description,name,phone);
 
 }

 function getInputVal(id){
 return document.getElementById(id).value;
 }


 function saveMessage(name,caption,description,name,phone){
 var newMessageRef=messagesRef.push();
 newMessageRef.set({
 name:name,
 caption:caption,
 description:description,
 name:name,
 phone:phone 
 });
 
 
 }