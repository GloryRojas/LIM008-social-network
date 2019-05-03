import{cerrarSesionClick} from '../view-controller.js';

export const menuNavegacionHome = () => {
  //Carga de Headerhome
  const headerHome = document.createElement('div');
  const pantallaPrincipal = `
    <header class='font1'>
      <input type="checkbox" id="btn-menu" /><label for="btn-menu" class="icon-menu"></label>
      <img class="logo" src='https://user-images.githubusercontent.com/45070947/57118007-e7b30f00-6d25-11e9-8393-7fcd9d99e174.png' alt="home"><h1 class="bienvenido">SinSoroche</h1>
      <nav class="nav-menu">
        <a href="#/home">Inicio</a>
        <a href="#/myprofile">Mi Perfil</a>
        <a href="#/login" id="btn-cerrar-sesion">Cerrar Sesión </a>     
      </nav>
    </header>
  `;
  headerHome.innerHTML = pantallaPrincipal;

  //Carga de Cerrar Sesión
  const btnCerrarSesion = headerHome.querySelector('#btn-cerrar-sesion');
  btnCerrarSesion.addEventListener('click', cerrarSesionClick);
  return headerHome;
}