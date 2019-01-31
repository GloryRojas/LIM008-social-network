import { logWithPasswordAndEmail, logWithGoogle, logWithFacebook, registerWithEmail } from './autentificacion.js';

export const formLogin = `
   <div class="">
     <form id="form-autenticacion" class="" action="index.html" method="post">
       <fieldset>
         <h3>Inicia sesión en tu cuenta</h3>
         <input class="form" type="text" id="email" placeholder="Correo electrónico"></input>
         <input class="form" type="password" id="password" placeholder="Contraseña"></input>
         <button class="form" id="btn-login" type="submit"><span>Ingresa</span></button>
       </fieldset>
     </form>
   </div>
   <div class="">
     <button id="btn-google" class="form" type="submit"><span>Ingresa con Google</span></button>
     <button id="btn-facebook" class="form" type="submit"><span>Ingresa con Facebook</span></button>
   </div>
   <div class="">
     <h4>¿No tienes cuenta?</h4>
     <a id = "btn-register" href="">Registrate Aquí</a>
   </div>
`;

export const formRegister = `
   <div>
    <form id="form-registrar" class="" action="index.html" method="post">
      <fieldset>
        <h4>Registrate con tu direccion de correo electronico</h4>
        <input class="form" type="text" id="correo" placeholder="Correo electrónico"></input>
        <input class="form" type="password" id="contrasena" placeholder="Contraseña"></input>
        <input class="form" type="password" id="nombres" placeholder="Nombres"></input>
        <h6>Fecha de Nacimiento</h6>
        <input class="form" type="text" id="dia" placeholder="Día"></input>
        <input class="form" type="password" id="mes" placeholder="Mes"></input>
        <input class="form" type="password" id="año" placeholder="Año"></input>
        <button class="form" id="btn-register" type="submit"><span>REGISTRATE</span></button>
      </fieldset>
    </form>
   </div>
`;

const formIn = document.getElementById('form-in');
formIn.innerHTML = formLogin;

const formRegisterOne = document.getElementById("form-register");
formRegisterOne.innerHTML = formRegister;

let formAutenticacion;
let btnGoogle;
let btnFacebook;
let formRegistrar;
const inicializar = () => {
  formAutenticacion = document.getElementById("form-autenticacion");
  formAutenticacion.addEventListener("submit", logWithPasswordAndEmail);
  btnGoogle = document.getElementById("btn-google");
  btnGoogle.addEventListener("click", logWithGoogle);
  btnFacebook = document.getElementById("btn-facebook");
  btnFacebook.addEventListener("click", logWithFacebook);
  formRegistrar = document.getElementById("form-registrar");
  formRegistrar.addEventListener("submit", registerWithEmail);
}

window.onload = inicializar;
