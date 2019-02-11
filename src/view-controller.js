import { ingresarConCorreoYContrasena, ingresarConGoogle, ingresarConFacebook, registroConCorreo, cerrarSesion } from './controller/autentificacion.js';
import { agregarPost, eliminarPost, editarPost} from './controller/publicacion.js';

// Funcion para cambiar la ruta
export const cambiarHash = (hash) =>  {
    location.hash = hash;
  }

export const ingresarConCorreoYContrasenaClick = (event) => {
    event.preventDefault();
    let usuario = document.querySelector('#email').value;
    let contrasena = document.querySelector('#password').value;
    let errorLogin = document.querySelector('#error-login');
    ingresarConCorreoYContrasena(usuario, contrasena)
        .then(() => cambiarHash('/home'))
        .catch(() => errorLogin.innerHTML= 'Datos incorrectos, vuelve a intentarlo')
    }

export const ingresarConGoogleClick = (event) => {
    event.preventDefault();
    ingresarConGoogle()
        .then(() => {
            let user = firebase.auth().currentUser;
            if (user != null) {
            user.providerData.forEach(function (profile) {
                firebase.firestore().collection('users').doc(user.uid).set({
                    id: profile.uid,
                    name: profile.displayName,
                    email: profile.email,
                    photo: profile.photoURL,
                    });
            }
            )}
            cambiarHash('/home');
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
        })
    }

export const ingresarConFacebookClick = (event) => {
    event.preventDefault();
    ingresarConFacebook()
        .then(() => {
            let user = firebase.auth().currentUser;
            if (user != null) {
            user.providerData.forEach(function (profile) {
                firebase.firestore().collection('users').doc(user.uid).set({
                    id: profile.uid,
                    name: profile.displayName,
                    email: profile.email,
                    photo: profile.photoURL,
                    });
            }
            )}
            cambiarHash('/home');
        })
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
    registroConCorreo(user, password)
        .then(() => {
            let user = firebase.auth().currentUser;
            firebase.firestore().collection('users').doc(user.uid).set({
                id: user.uid,
                name: name,
                email: user.email,
                photo: user.photoURL,
                });
            user.sendEmailVerification()
            .catch((error) => {
            console.log('No se pudo enviar email')
            });
            alert('Email enviado, revise su bandeja e inicie sesión');
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


 export const inicializarFire = () => {
    firebase.auth().onAuthStateChanged(()=>{
        const user = firebase.auth().currentUser;
        let photo, name;
        if (user !== null) {
             name = user.displayName;
             photo = user.photoURL;
            console.log(name,photo); 
            const nameInfo=`
            <p>${name}</p>
            <img src="${photo}">`;
            const datosUsuario = document.getElementById('datos-usuario'); 
            datosUsuario.innerHTML= nameInfo;
            //menuNavegacionHome(displayName, photoURL);
        } else {
            console.log('hola')
        }     
    } )
}

export const guardarConClick = (event) => {
    event.preventDefault();
    const valorMensaje = document.getElementById("id-publicacion").value;
    return agregarPost(valorMensaje);
}
export const eliminarMensajeConClick = (event) =>{
  event.preventDefault();
  eliminarPost(event.target.id);
}
export const editarConClick = (event) => {
  event.preventDefault();
  const idMensaje = event.target.id
  const post = "Lucero le dijo gorda a Glory"
  editarPost(idMensaje, post)
}