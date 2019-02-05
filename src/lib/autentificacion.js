// Funcion para cambiar la ruta
export const cambiarHash = (hash) =>  {
  location.hash = hash;
}

// Aqui todas las funciones que involucran FIREBASE AUTH

// Iniciar sesión con cuenta registrada
export const ingresarConCorreoYContrasena = (usuario, contrasena) => {
  firebase.auth().signInWithEmailAndPassword(usuario, contrasena)
    .then((result) => {
      cambiarHash('/home');
    })
    .catch((error) => {
      alert('Información incorrecta');
    })
}

// Iniciar sesion con cuenta de Google
export const ingresarConGoogle = (event) => {
  event.preventDefault();
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    cambiarHash('/home');
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};

export const ingresarConFacebook = (event) =>{
  event.preventDefault();
  const  provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    cambiarHash('/home');
    // ...
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

// Registrarse con correo y contraseña
export const registroConCorreo = (event) => {
  event.preventDefault();
  let user = event.target.correo.value;
  let password = event.target.contrasena.value;

  firebase.auth().createUserWithEmailAndPassword(user, password)
  .then(result => {
    let user = firebase.auth().currentUser;
    user.sendEmailVerification()
      .then(result => {
        alert('Email enviado, revise su bandeja');
      })
    .catch((error) => {
      console.log('No se pudo enviar email')
    });
    alert('Datos registrados: Inicie sesión')
    cambiarHash('/login');
    // firebase.auth().signOut()
  }).catch(function(error) {
    alert(error.message)
    console.log(error.message);
  });
};

// Cerrar Sesión
export const cerrarSesion =(user) => {
// event.preventDefault();
firebase.auth().signOut().then(() => {
  cambiarHash('/login');
})
.catch(err => console.log('Error logout', err))
};
