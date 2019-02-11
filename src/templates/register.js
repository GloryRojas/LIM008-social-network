import { registroConCorreoClick } from '../view-controller.js';

export const registrarCuenta = () => {
  const formularioRegistro = document.createElement('div');
  const formulario = `
  <div class='registrarse'>
    <img class='logo-registro' src='img/icono-registrar.png' alt=''>
   <form id='form-registrar' class='form-registrar' action='index.html' method='post'>
     <fieldset>
       <span class='titulo-registrarse'>Regístrate con tu direccion de correo electronico</span>
       <span id='error-registrarse'></span>
       <input class='form' type='text' name='nombres' placeholder='Nombres'></input>
       <input class='form' type='text' name='correo' placeholder='Correo electrónico'></input>
       <input class='form' type='password' name='contrasena' placeholder='Contraseña'></input>
       <button class='btn-login' id='btn-register' type='submit'><span>REGISTRATE</span></button>
     </fieldset>
   </form>
  </div>
  `;

formularioRegistro.innerHTML = formulario;

const subRegistrar = formularioRegistro.querySelector('#form-registrar');
subRegistrar.addEventListener('submit', registroConCorreoClick);
return formularioRegistro;

}

