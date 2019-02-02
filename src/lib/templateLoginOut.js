import{cerrarSesion} from './autentificacion.js';
const pantallaPrincipal = `
<header>
  <div class="contenedor">
    <h1 ><img class="logo" src="img/logo.png" alt="">Infocourse</h1>
    <input type="checkbox"  id="btn-menu"><label for="btn-menu" class="icon-menu"></label>
    
    <nav class="menu">
         <a href="#">Inicio</a>
         <a href="#">Mi Perfil</a>
         <a href="#" id="btn-cerrar-sesion">Cerrar Sesión </a>     
    </nav>
    <h1 id="nombre"></h1>
  </div>
</header>
<br>
<div>
<textarea name="post" id="post" ></textarea>
<br>
<button id="publicar">publicar</button>
</div>

`;

const formCerrarSesion = document.getElementById('form-in2');
formCerrarSesion.innerHTML = pantallaPrincipal;

let btnCerrarSesion;

const cerrarS = () =>{
btnCerrarSesion = document.getElementById('btn-cerrar-sesion');
btnCerrarSesion.addEventListener("click",cerrarSesion);
}
window.onload = cerrarS;