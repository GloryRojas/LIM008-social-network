import{cerrarSesion, registerWithEmail} from './autentificacion.js';


export const headerHome = () => {
  const formCerrarSesion = document.createElement('div');
  const pantallaPrincipal = `
    <div class='contenedor'>
      <h1 ><img class='logo' src='img/logo.png' alt=''>Infocourse</h1>
      <input type='checkbox'  id='btn-menu'><label for='btn-menu' class='icon-menu'></label>

      <nav class='menu'>
           <a href='#'>Inicio</a>
           <a href='#'>Mi Perfil</a>
           <a href='#' id='btn-cerrar-sesion'>Cerrar Sesión </a>
      </nav>
      <h1 id='nombre'></h1>
    </div>
  `;

  formCerrarSesion.innerHTML = pantallaPrincipal;

  const btnCerrarSesion = formCerrarSesion.querySelector('#btn-cerrar-sesion');
  btnCerrarSesion.addEventListener('click', cerrarSesion);
    return formCerrarSesion;
}

export const registrarCuenta = () => {
  const formIn = document.createElement('div');
  const formRegister = `
  <div class='registrarse'>
    <img class='logo-registro' src='img/icono-registrar.png' alt=''>
   <form id='form-registrar' class='form-registrar' action='index.html' method='post'>
     <fieldset>
       <span class='titulo-registrarse'>Registrate con tu direccion de correo electronico</span>
       <input class='form' type='text' name='correo' placeholder='Correo electrónico'></input>
       <input class='form' type='password' name='contrasena' placeholder='Contraseña'></input>
       <input class='form' type='password' id='nombres' placeholder='Nombres'></input>
       <h6>Fecha de Nacimiento</h6>
       <input class='form' type='text' id='dia' placeholder='Día'></input>
       <input class='form' type='password' id='mes' placeholder='Mes'></input>
       <input class='form' type='text' id='año' placeholder='Año'></input>
       <button class='btn-login' id='btn-register' type='submit'><span>REGISTRATE</span></button>
     </fieldset>
   </form>
  </div>
  `;

formIn.innerHTML = formRegister;

const formRegistrar = formIn.querySelector('#form-registrar');
formRegistrar.addEventListener('submit', registerWithEmail);
return formIn;
}
