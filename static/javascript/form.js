 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDF_xO5zi0cfP-OXhETSgfkFtNyFGe01H8",
    authDomain: "project-web-f8ff4.firebaseapp.com",
    projectId: "project-web-f8ff4",
    storageBucket: "project-web-f8ff4.appspot.com",
    messagingSenderId: "1036257551764",
    appId: "1:1036257551764:web:ee336051c9bd4995329b81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

   function teste(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      alert("Signed up");
   }
   
 
   function teste2(){
    var email = document.getElementById("email").value;

    if (email == ""){
     alert("O e-mail deve ser preenchido!");
    }
    else{
     alert("Signed in");
    }
  }
    function salvar(){
      email = document.getElementById("email").value;
      var email = localStorage.setItem("email","email");
     alert("o email "+localemail);
    }
    function ler(){

      var localemail = localStorage.getItem ("email","email");
      document.onchange.savar();

    }
   
    
