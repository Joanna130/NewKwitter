
var firebaseConfig = {
      apiKey: "AIzaSyDEuYDvtnocXTx1CgUhbN-ozNmmng7P49w",
      authDomain: "kwitternew-3d386.firebaseapp.com",
      databaseURL: "https://kwitternew-3d386-default-rtdb.firebaseio.com",
      projectId: "kwitternew-3d386",
      storageBucket: "kwitternew-3d386.appspot.com",
      messagingSenderId: "1041247739225",
      appId: "1:1041247739225:web:fd3d9746550ef043b60048"
    };

      firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
      document.getElementById("user_name").innerHTML = "Welcome "+user_name+ "  !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name  - "+ Room_name);
      row = "<div class = 'room_name' id= "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_Name +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",  name);
      window.location = "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.HTML";
}

