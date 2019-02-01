import { logWithPasswordAndEmail, logWithGoogle, logWithFacebook, registerWithEmail } from './autentificacion.js';

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
         <input class="form " type="text" id="email" placeholder="Correo electrónico"></input>
         <input class="form" type="password" id="password" placeholder="Contraseña"></input>
         <button class="btn-login" id="btn-login" type="submit">INICIAR SESIÓN</button>
         <div class="iconos">
           <button id="btn-google" class="formGoogle" ><img class = "iconGoogle" src="img/icono-google.png">Iniciar sesión con Google</button>
           <button id="btn-facebook" class="formFacebook"><img class = "iconFacebook" src="img/icono-face.png">Iniciar sesión con Facebook</button><br><br>
           <a>¿No tienes cuenta?</a>
           <a id = "registrate">Regístrate AQUI</a>
         </div><br>
       </form>
     </div>
   </div>
 </section>
`;

export const formRegister = `
  <div class="registrarse">
    <img class="logo-registro" src="img/icono-registrar.png" alt="">
   <form id="form-registrar" class="form-registrar" action="index.html" method="post">
     <fieldset>
       <span class="titulo-registrarse">Registrate con tu direccion de correo electronico</span>
       <input class="form" type="text" id="correo" placeholder="Correo electrónico"></input>
       <input class="form" type="password" id="contrasena" placeholder="Contraseña"></input>
       <input class="form" type="password" id="nombres" placeholder="Nombres"></input>
       <h6>Fecha de Nacimiento</h6>
       <input class="form" type="text" id="dia" placeholder="Día"></input>
       <input class="form" type="password" id="mes" placeholder="Mes"></input>
       <input class="form" type="text" id="año" placeholder="Año"></input>
       <button class="btn-login" id="btn-register" type="submit"><span>REGISTRATE</span></button>
     </fieldset>
   </form>
  </div>
`;

const formIn = document.getElementById('form-in');
formIn.innerHTML = formLogin;

const registrate = document.getElementById("registrate");
registrate.addEventListener("click", () => {
  formIn.innerHTML = formRegister;
});

// Inicia sesión con Correo y contraseña
const formAutenticacion = document.getElementById("form-autenticacion");
formAutenticacion.addEventListener("submit", logWithPasswordAndEmail);

// Inicia sesion con cuenta Google
const btnGoogle = document.getElementById("btn-google");
btnGoogle.addEventListener("click", logWithGoogle);

// Inicia sesion con cuenta Facebook
const btnFacebook = document.getElementById("btn-facebook");
btnFacebook.addEventListener("click", logWithFacebook);


const formRegistrar = document.getElementById("form-registrar");
formRegistrar.addEventListener("submit", registerWithEmail);
