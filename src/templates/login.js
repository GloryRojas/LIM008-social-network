import { ingresarConCorreoYContrasenaClick, ingresarConGoogleClick, ingresarConFacebookClick, cambiarHash } from '../view-controller.js'

export const iniciarSesion = () => {
  const formIniciar = document.createElement('div');
  const formLogin = `
    <div class='form-login posicion-login'>
     <div class='cabecera-login'>
       <img class='logo-inicio' src='https://user-images.githubusercontent.com/45070947/57118007-e7b30f00-6d25-11e9-8393-7fcd9d99e174.png' alt='logo'>
       <h2 class='slogan font2'>SinSoroche</h2>
       <span class='slogan font1'>Comparte tus viajes y experiencias</span>
     </div>
     <form id='form-autenticacion' class='form-autenticacion' action='index.html' method='post'>
       <h4 id='error-login' class='error font1'></h4>
       <input class='form font1' type='text' id='email' name='email' placeholder='Correo electrónico'>
       <input class='form font1' type='password' id='password' name='password' placeholder='Contraseña'>
       <button class='form btn-login font1' id='btn-login' type='submit'><span>INICIAR SESIÓN</span></button>
     </form>
     <div class='iconos'>
       <button id='btn-google' class='form formGoogle font1'><i class="fab fa-facebook"></i><span> Ingresa con Google</span></button>
       <button id='btn-facebook' class='form formFacebook font1'><i class="fab fa-google"></i><span> Ingresa con Facebook</span></button>
       <p id='btn-registrate' class='font1 text-final'>¿No tienes cuenta? Regístrate AQUI</p>
     </div>
    </div>
  `;
  formIniciar.classList.add('login')
  formIniciar.innerHTML = formLogin;
    
  // Inicia sesión con Correo y contraseña
  const formAutenticacion = formIniciar.querySelector('#btn-login');
  formAutenticacion.addEventListener('click', ingresarConCorreoYContrasenaClick);

  // Inicia sesion con cuenta Google
  const btnGoogle = formIniciar.querySelector('#btn-google');
  btnGoogle.addEventListener('click', ingresarConGoogleClick);

  // Inicia sesion con cuenta Facebook
  const btnFacebook = formIniciar.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', ingresarConFacebookClick);

  const btnRegister = formIniciar.querySelector('#btn-registrate');
  btnRegister.addEventListener('click', () => {
  cambiarHash('#/signup')
  });
  
  return formIniciar;
};
