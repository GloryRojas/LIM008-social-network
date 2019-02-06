import { ingresarConCorreoYContrasena, ingresarConGoogle, ingresarConFacebook, registroConCorreo, cerrarSesion } from '../controller/autentificacion.js';

// Funcion para cambiar la ruta
export const cambiarHash = (hash) =>  {
    location.hash = hash;
  }

export const ingresarConCorreoYContrasenaClick = (event) => {
    event.preventDefault();
    let usuario = document.querySelector('#email').value;
    let contrasena = document.querySelector('#password').value;
    ingresarConCorreoYContrasena(usuario, contrasena)    
        .then(() => cambiarHash('/home'))
        .catch(() => alert('Información incorrecta'))
    }

export const ingresarConGoogleClick = (event) => {
    event.preventDefault();
    ingresarConGoogle()
        .then(() => cambiarHash('/home'))
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        })
    }

export const ingresarConFacebookClick = (event) => {
    event.preventDefault();  
    ingresarConFacebook()
    .then(() => cambiarHash('/home'))
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      })
    }

export const registroConCorreoClick = (event) => {
    event.preventDefault();
    let user = event.target.correo.value;
    let password = event.target.contrasena.value;
    registroConCorreo(user, password)
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
      })
    .catch(function(error) {
        alert(error.message)
        console.log(error.message);
      })
    }

export const cerrarSesionClick = () => {
    cerrarSesion()
    .then(() => cambiarHash('/login'))
    .catch(err => console.log('Error logout', err))
 }



 export const inicializarFire = ()=>{
    firebase.auth().onAuthStateChanged((auth)=>{
        console.log(auth)
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;
        console.log(user)
        if (user != null) {
          name = user.displayName;
          email = user.email;
          photoUrl = user.photoURL;
          uid = user.uid; 
          emailVerified = user.emailVerified;
          uid = user.uid;  
          console.log(name,email, photoUrl, uid, emailVerified);

              }
            })
        }