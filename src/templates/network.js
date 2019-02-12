import{cerrarSesionClick} from '../view-controller.js';
import { cambiarHash } from '../view-controller.js'


export const menuNavegacionHome = () => {
  //Carga de Headerhome
  const headerHome = document.createElement('div');
  const pantallaPrincipal = `
    <header>
      <div class="contenedor">
              <img class="logo" src='img/logo-home.png' alt=""><h1 class="bienvenidx">Infocourse</h1>
            <input type="checkbox"  id="btn-menu"><label for="btn-menu" class="icon-menu"></label>
            <nav class="menu">
                <a href="#/home" id="btn-inicio">Inicio</a>
                <a href="#/myprofile" id="btn-miperfil">Mi Perfil</a>
                <a href="#/login" id="btn-cerrar-sesion">Cerrar Sesión </a>     
            </nav>
      </div>
    </header>
  `;
  headerHome.innerHTML = pantallaPrincipal;

  //Carga de Cerrar Sesión
  const btnCerrarSesion = headerHome.querySelector('#btn-cerrar-sesion');
  btnCerrarSesion.addEventListener('click', cerrarSesionClick);
   return headerHome;
}