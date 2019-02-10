import { ingresarConCorreoYContrasena, ingresarConGoogle, ingresarConFacebook, registroConCorreo, cerrarSesion } from './controller/autentificacion.js';
import { agregarPost} from './controller/publicacion.js';
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
    let name = event.target.nombres.value;
    registroConCorreo(user, password,name)
    .then(() => {
        let user = firebase.auth().currentUser;
        firebase.firestore().collection('users').doc(user.uid).set({
        id: user.uid,
        name: name,
        email: user.email,
        photo: user.photoURL
        });
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
 


 

export const guardarConClick = (event) => {
    event.preventDefault();
      const valorMensaje = document.getElementById("id-publicacion").value;
      return agregarPost(valorMensaje);
}