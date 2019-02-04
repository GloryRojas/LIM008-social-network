import { iniciarSesion } from './lib/templatesLogin.js';
import { headerHome } from './lib/templateLoginOut.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/index');
  } else if (hash === '#/index' || hash === '#/home') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/index');
  }
}

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('form-in');
  root.innerHTML = '';
  switch (router) {
    case 'home':
      root.appendChild(headerHome());
      break;
    case 'index':
      root.appendChild(iniciarSesion());
      break;
    default:
      root.appendChild(iniciarSesion());
      break;
  }
}

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash))
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash)
}
