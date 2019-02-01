import{cerrarSesion} from './autentificacion.js';
const pantallaPrincipal = `<section class="pantallaInterna">
<header>
    <div class="cabecera">
      <h1> 

        <img class="logo" src="img/logo.png" alt="">
        <a class="titulo">Infocourse</a>
      </h1>
    </div>
    <input type="checkbox"  id="btn-menu"><label for="btn-menu" class="icon-menu"></label>
    <nav class="menu">
      <ul>
        
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Mi Perfil</a></li>
        <li><a href="#">Cerrar Sesión </a></li>
      </ul>     

      </nav>
    </header>
  </section>
<a href="#">hola</a>
<button id="btn-cerrar-sesion">cerrar sesion</button>`;

const formCerrarSesion = document.getElementById('form-in2');
formCerrarSesion.innerHTML = pantallaPrincipal;

let btnCerrarSesion;

const cerrarS = () =>{
btnCerrarSesion = document.getElementById('btn-cerrar-sesion');
btnCerrarSesion.addEventListener("click",cerrarSesion);
}
window.onload = cerrarS;