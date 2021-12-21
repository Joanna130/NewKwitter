var firebaseConfig = {
      apiKey: "AIzaSyDEuYDvtnocXTx1CgUhbN-ozNmmng7P49w",
      authDomain: "kwitternew-3d386.firebaseapp.com",
      projectId: "kwitternew-3d386",
      storageBucket: "kwitternew-3d386.appspot.com",
      messagingSenderId: "1041247739225",
      appId: "1:1041247739225:web:fd3d9746550ef043b60048"
    };
  
     firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.HTML";
}

