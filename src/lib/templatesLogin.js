import { logWithPasswordAndEmail } from './autentificacion.js';
import { logWithGoogle } from './autentificacion.js';
import { logWithFacebook} from './autentificacion.js';
//import {cerrarSesion} from './autentificacion.js';

export const formLogin = `
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
    <input class="form" type="text" id="email" placeholder="&#128272;Correo electrónico"></input>
    <input class="form" type="password" id="password" placeholder="&#128272;Contraseña"></input>
    <button class="form" id="btn-login" type="submit">Ingresa</button>
    <div class="iconos">
    <a id="btn-google" ><img class = "icong" src="img/icono-google.png"></a>
  <a id="btn-facebook" ><img class = "iconf" src="img/icono-face.png"></a>
  </div>
  <a>¿No tienes cuenta?</a>
  <a>Regístrate AQUI</a>
  </form>
  
  </div>
  
</div>
</div>

`;
const formIn = document.getElementById('form-in');
formIn.innerHTML = formLogin;


    let formAutenticacion;
    let btnGoogle;
    let btnFacebook;

const inicializar = () => {
  formAutenticacion = document.getElementById("form-autenticacion");
  formAutenticacion.addEventListener("submit", logWithPasswordAndEmail);
  btnGoogle = document.getElementById("btn-google");
  btnGoogle.addEventListener("click", logWithGoogle);
  btnFacebook = document.getElementById("btn-facebook");
  btnFacebook.addEventListener("click",logWithFacebook);
}

window.onload = inicializar;
  