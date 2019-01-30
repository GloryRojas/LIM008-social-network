import { logWithPasswordAndEmail } from './autentificacion.js';
import { logWithGoogle } from './autentificacion.js';
import { logWithFacebook} from './autentificacion.js';

export const formLogin = `

   <fieldset>
     <div>
       <form id="form-autenticacion" class="" action="index.html" method="post">
         <h3>Inicia sesión en tu cuenta</h3>
         <input class="form" type="text" id="email" placeholder="Correo electrónico"></input>
         <input class="form" type="password" id="password" placeholder="Contraseña"></input>
         <button class="form" id="btn-login" type="submit"><span>Ingresa</span></button>
       </form>
     </div>
     <div class="">
       <button id="btn-google" class="form" type="submit"><span>Ingresa con Google</span></button>
       <button id="btn-facebook" class="form" type="submit"><span>Ingresa con Facebook</span></button>
     </div>
     <div class="">
     <h4>¿No tienes cuenta?</h4>
     <a href="">Registrate Aquí</a>
     </div>
   </fieldset>

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
