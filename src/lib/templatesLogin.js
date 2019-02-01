import { logWithPasswordAndEmail } from './autentificacion.js';
import { logWithGoogle } from './autentificacion.js';
import { logWithFacebook} from './autentificacion.js';

export const formLogin = `
<section>
  <div class="login">
    <div class="iniciar-sesion">
      <div class="cabecera-login">
        <img class="logo" src="img/logo.png" alt="">
        <h1 class="titulo">Infocourse</h1>
        <span class="slogan">Comparte tus conocimientos y aprende de otros</span>
      </div>
      <form id="form-autenticacion" class="form-autenticacion" action="index.html" method="post">
        <input class="form" type="text" id="email" placeholder="Correo electrónico"></input>
        <input class="form" type="password" id="password" placeholder="Contraseña"></input>
        <button class="btn-login" id="btn-login" type="submit">INICIAR SESIÓN</button>
        <div class="iconos">
          <button id="btn-google" class="formGoogle" ><img class = "iconGoogle" src="img/icono-google.png">Iniciar sesión con Google</button>
          <button id="btn-facebook" class="formFacebook"><img class = "iconFacebook" src="img/icono-face.png">Iniciar sesión con Facebook</button><br><br>
          <a>¿No tienes cuenta?</a>
          <a>Regístrate AQUI</a>
        </div><br> 
      </form>
    </div>
  </div>
</section>
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
