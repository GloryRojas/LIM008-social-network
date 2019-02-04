import { ingresarConCorreoYContrasena, ingresarConGoogle, ingresarConFacebook, cambiarHash } from '../lib/autentificacion.js';

export const iniciarSesion = () => {
  const formIniciar = document.createElement('section')
  const formLogin = `
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
       <a id='btn-registrate' >¿No tienes cuenta? Regístrate AQUI</a>
     </div>
    </div>
  `;
  formIniciar.innerHTML = formLogin;

  // Inicia sesión con Correo y contraseña
  const formAutenticacion = formIniciar.querySelector('#form-autenticacion');
  formAutenticacion.addEventListener('submit', ingresarConCorreoYContrasena);

  // Inicia sesion con cuenta Google
  const btnGoogle = formIniciar.querySelector('#btn-google');
  btnGoogle.addEventListener('click', ingresarConGoogle);

  // Inicia sesion con cuenta Facebook
  const btnFacebook = formIniciar.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', ingresarConFacebook);

  const btnRegister = formIniciar.querySelector('#btn-registrate');
  btnRegister.addEventListener('click', () => {
  cambiarHash('/signup')
  });

  return formIniciar;
};
