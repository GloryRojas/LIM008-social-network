import { registroConCorreoClick, cambiarHash } from '../view-controller.js';

export const registrarCuenta = () => {
  const formularioRegistro = document.createElement('div');
  const formulario = `
  <div class='form-login posicion-register'>
    <div class='cabecera-login'>
      <img class='logo-inicio' src='https://user-images.githubusercontent.com/45070947/57118007-e7b30f00-6d25-11e9-8393-7fcd9d99e174.png' alt='logo'>
      <h2 class='slogan font2'>FOREIGN</h2>
      <span class='slogan font1'>Comparte tus viajes y experiencias</span>
    </div>
    <form id='form-registrar' class='form-registrar' action='index.html' method='post'>
      <fieldset>
        <span class='slogan font1'>Regístrate con tu direccion de correo electronico</span>
        <h4 id='error-registrarse' class='error'></h4>
        <input class='form font1' type='text' name='nombres' placeholder='Nombres'>
        <input class='form font1' type='text' name='correo' placeholder='Correo electrónico'>
        <input class='form font1' type='password' name='contrasena' placeholder='Contraseña'>
        <button class='form font1 btn-login' id='btn-register' type='submit'><span>REGISTRATE</span></button>
      </fieldset>
    </form>
    <p class='font1 text-final' id='btn-iniciar'>Volver a Inicio de sesión</p>
  </div>
  `;
formularioRegistro.classList.add('signup');
formularioRegistro.innerHTML = formulario;

const subRegistrar = formularioRegistro.querySelector('#form-registrar');
subRegistrar.addEventListener('submit', registroConCorreoClick);

const btnIniciar = formularioRegistro.querySelector('#btn-iniciar');
  btnIniciar.addEventListener('click', () => {
  cambiarHash('/login')
  });

return formularioRegistro;
}

