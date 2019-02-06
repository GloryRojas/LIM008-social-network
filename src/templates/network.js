import{cerrarSesion, registroConCorreo} from '../controller/autentificacion.js';

export const menuNavegacionHome = () => {
  const formCerrarSesion = document.createElement('div');
  const pantallaPrincipal = `
    <div class='contenedor'>
      <a class = "contenedor-home"><img class='logo' src='img/logo-home.png' alt=''>Infocourse</h1>
      <input type='checkbox'  id='btn-menu'><label for='btn-menu' class='icon-menu'></label>
      <nav class='menu'>
           <a href='#'>Inicio</a>
           <a href='#'>Mi Perfil</a>
           <a href='#' id='btn-cerrar-sesion'>Cerrar Sesión </a>
      </nav>
      <h1 id='nombre'></h1>
    </div>

  `;
  formCerrarSesion.innerHTMlgit  = pantallaPrincipal;

  const btnCerrarSesion = formCerrarSesion.querySelector('#btn-cerrar-sesion');
  btnCerrarSesion.addEventListener('click', cerrarSesion);
    return formCerrarSesion;
}
