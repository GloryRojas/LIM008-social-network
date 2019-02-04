import { logWithPasswordAndEmail, logWithGoogle, logWithFacebook, registerWithEmail, changeHash } from './autentificacion.js';
import { registrarCuenta } from './templateLoginOut.js';

export const iniciarSesion = () => {
  const formularioIniciar = document.createElement('div')
  const formLogin = `
   <section>
     <div class='login'>
       <div class='iniciar-sesion'>
         <div class='cabecera-login'>
           <img class='logo' src='img/logo.png' alt=''>
           <h1 class='titulo'>Infocourse</h1>
           <span class='slogan'>Comparte tus conocimientos y aprende de otros</span>
         </div>
         <form id='form-autenticacion' class='form-autenticacion' action='index.html' method='post'>
           <input class='form ' type='text' id='email' placeholder='Correo electrónico'></input>
           <input class='form' type='password' id='password' placeholder='Contraseña'></input>
           <button class='btn-login' id='btn-login' type='submit'>INICIAR SESIÓN</button>
         </form>
         <div class='iconos'>
           <button id='btn-google' class='formGoogle' ><img class = 'iconGoogle' src='img/icono-google.png'>Iniciar sesión con Google</button>
           <button id='btn-facebook' class='formFacebook'><img class = 'iconFacebook' src='img/icono-face.png'>Iniciar sesión con Facebook</button><br><br>
           <button id='btn-registrate' >¿No tienes cuenta? Regístrate AQUI</button>
         </div>
       </div>
     </div>
   </section>
  `;
  formularioIniciar.innerHTML = formLogin;

  // Inicia sesión con Correo y contraseña
  const formAutenticacion = formularioIniciar.querySelector('#form-autenticacion');
  formAutenticacion.addEventListener('submit', logWithPasswordAndEmail);

  // Inicia sesion con cuenta Google
  const btnGoogle = formularioIniciar.querySelector('#btn-google');
  btnGoogle.addEventListener('click', logWithGoogle);

  // Inicia sesion con cuenta Facebook
  const btnFacebook = formularioIniciar.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', logWithFacebook);

  const btnRegister = formularioIniciar.querySelector('#btn-registrate');
  btnRegister.addEventListener('click', () => {
  changeHash('/registro')
  });

  return formularioIniciar;
};
