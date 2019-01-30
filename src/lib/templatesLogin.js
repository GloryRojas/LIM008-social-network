import { autentificar } from './autentificacion.js';
import { logWithGoogle } from './autentificacion.js';
import { logWithFacebook} from './autentificacion.js';

export const formRegister = `

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
let btnGoogle;
let btnFacebook;
const inicializar = () => {
  formAutenticacion = document.getElementById("form-autenticacion");
  formAutenticacion.addEventListener("submit", autentificar);
  btnGoogle = document.getElementById("btn-google");
  btnGoogle.addEventListener("click", logWithGoogle);
  btnFacebook = document.getElementById("btn-facebook");
  btnFacebook.addEventListener("click",logWithFacebook);
}

window.onload = inicializar;
