import { iniciarSesion } from './templates/login.js';
import { menuNavegacionHome } from './templates/network.js';
import { registrarCuenta } from './templates/register.js';
import { cargarPublicaciones } from './templates/post.js';
import { obtenerPost } from './controller/publicacion.js';


const cambiarTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return vistaTmp('#/login');
  } else if (hash === '#/login' || hash === '#/home' || hash === '#/signup') {
    return vistaTmp(hash);
  } else {
    return vistaTmp('#/login');
  }
}

const vistaTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    case 'home':
      root.appendChild(menuNavegacionHome());
      root.appendChild(cargarPublicaciones())
     // root.appendChild(inicializarFire());
      //root.appendChild(muestraDatosUsuario());
      break;
    case 'login':
      root.appendChild(iniciarSesion());
      break;
    case 'signup':
      root.appendChild(registrarCuenta());
      break;
    default:
      root.appendChild(iniciarSesion());
      break;
  }
}

export const initRouter = () => {
  window.addEventListener('load', cambiarTmp(window.location.hash))
  if (('onhashchange' in window)) window.onhashchange = () => cambiarTmp(window.location.hash)
}
