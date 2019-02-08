import{cerrarSesion} from '../controller/autentificacion.js';

export const menuNavegacionHome = () => {
  const formCerrarSesion = document.createElement('header');

  const pantallaPrincipal = `
  <header>
    <div class="contenedor">
            <img class="logo" src='img/logo-home.png' alt=""><h1 class="bienvenidx">Infocourse</h1>
          <input type="checkbox"  id="btn-menu"><label for="btn-menu" class="icon-menu"></label>
          <nav class="menu">
               <a href="#">Inicio</a>
               <a href="#">Mi Perfil</a>
               <a href="#" id="btn-cerrar-sesion">Cerrar Sesión </a>     
          </nav>
    </div>
  </header>
  <div id="datos-usuario">
  </div>
  `;
  //const datosUsuario = document.getElementById('datos-usuario');
  //datosUsuario.innerHTML=inicializarFire();
  formCerrarSesion.innerHTML = pantallaPrincipal;
  const btnCerrarSesion = formCerrarSesion.querySelector('#btn-cerrar-sesion');
  btnCerrarSesion.addEventListener('click', cerrarSesion);
    return formCerrarSesion;
}
