let formAutenticacion;
const inicializar = () => {
  formAutenticacion = document.getElementById("form-autenticacion");
  formAutenticacion.addEventListener("submit", autentificar);
}

// Iniciar sesión con cuenta registrada
const autentificar = (event) => {
  event.preventDefault();
  let usuario = event.target.email.value;
  let contrasena = event.target.password.value;

  firebase.auth().signInWithEmailAndPassword(usuario, contrasena)
    .then((result) => {
      window.location = "home.html";
    })
    .catch((error) => {
      alert("Información incorrecta");
    })
}

const logWithGoogle = () => {
  event.preventDefault();
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult()
  .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      if (result.credential) {
          var token = result.credential.accessToken;
          console.log('token ' + token);
      }
      // The signed-in user info.
      var user = result.user;
      console.log('user ' + user);
      // if success redirect to
      $state.go('maps-fullwidth');
      window.location = "home.html"
      // ...
  }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      // The email of the user's account used.
      console.log(errorMessage);
      var email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(credential);
      // ...
  });
}

// window.onload = inicializar;
