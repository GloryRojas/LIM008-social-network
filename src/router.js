import { iniciarSesion,registrarCuenta,primeraPantalla} from './templates/login.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/index');
  } else if (hash === '#/index' || hash === '#/home'|| hash === '#/register') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/index');
  }
}

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const formIn = document.getElementById('form-in');
  formIn.innerHTML = '';
  switch (router) {
    case 'home':
    formIn.appendChild(primeraPantalla());
      break;
    case 'index':
    formIn.appendChild(iniciarSesion());
      break;
      case 'register':
      formIn.appendChild(registrarCuenta());
        break;
    default:
    formIn.appendChild(iniciarSesion());
      break;
  }
}

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
}