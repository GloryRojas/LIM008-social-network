export const changeHash = (hash) =>  {
  location.hash = hash;
}

// Iniciar sesión con cuenta registrada
export const logWithPasswordAndEmail = (event) => {
  event.preventDefault();
  let usuario = event.target.email.value;
  let contrasena = event.target.password.value;
  firebase.auth().signInWithEmailAndPassword(usuario, contrasena)
    .then((result) => {
      changeHash('/home');
    })
    .catch((error) => {
      alert('Información incorrecta');
    })
}

// Iniciar sesion con cuenta de Google
export const logWithGoogle = (event) => {
  event.preventDefault();
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    //var name = result.user.displayName;
    //document.querySelector('nombre').textContent= 'bienvenido' + name;
    changeHash('/home');
   console.log(result);
   console.log('Sucees .. Google');
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

export const logWithFacebook = (event) =>{
  event.preventDefault();
  const  provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    changeHash('/home');
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

export const cerrarSesion =(user) => {

//event.preventDefault();
firebase.auth().signOut().then(() => {
  //profile.classList.add('hidden');
  //profile.classList.remove('show');
  changeHash('/index');
})
.catch(err => console.log('Error logout', err))
};

// Registrarse con correo y contraseña
export const registerWithEmail = (event) => {
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
    changeHash('/index');
    // firebase.auth().signOut()
  }).catch(function(error) {
    alert(error.message)
    console.log(error.message);
  });
};
