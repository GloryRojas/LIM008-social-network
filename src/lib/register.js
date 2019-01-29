const formRegister = `

    <div>
      <div class="login">
      
      <div class="cabecera1">
      <img class="logo" src="img/logo.png" alt="">
       <h1 class="titulo">Infocourse</h1>
       <h3>Comparte tus conocimientos y aprende de otros</h3>
       </div>
       <div class="inicia-sesion">
      <form id="form-autenticacion" class="" action="index.html" method="post">
          <h2>Inicia sesión en tu cuenta</h2>
          <span class="icon-user" ></span><input class="form" type="text" id="email" placeholder="Correo electrónico"></input>
          <span class="icon-lock-empty" ></span><input class="form" type="password" id="password" placeholder="Contraseña"></input>
          <button class="form" id="btn-login" type="submit"><span>Ingresa</span></button>
          <button class="form" id="btn-google" type="submit"><span>Iniciar Sesión con Google</span></button>
        <button class="form" id="btn-facebook" type="submit"><img class = "iconf" src="iconos/facebook.png"><span>Iniciar Sesión con facebook </span></button>
        <a>¿No tienes cuenta?</a>
        <a>Regístrate AQUI</a>
        </form>
        
        </div>
        
      </div>
    </div>

`;

const formIn = document.getElementById('form-in');
formIn.innerHTML = formRegister;

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
ingresoGoogle(){
  if(!firebase.auth.currentUser){
    const provider= newfirebase.auth.GoogleProvider();
    provider.addScope('https:www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then ((result)=>{
const token =result.credential.accessToken;
const user=result.user;
    }).catch((error)=>{
const errorCode= error.code;
const errorMessage=  error.message;
    })
  }
}

window.onload = inicializar;

/*iniciar con facebook
authCuentaFacebook(){
const provider= new firebase.auth.FacebookAuth.provider();
firebase.auth().signInWithPopup(provider).then(result=>{
  $('#avatar').attr('src',result.user.photoURL)
  $('.modal').modal('close')
  Materialize.toast(``,)

})  
}*/