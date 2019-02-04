// Este es el punto de entrada de tu aplicacion
/*
import { myFunction } from './lib/index.js';

myFunction(); */

import { initRouter } from './router.js';

const init = () => {
 initRouter();
}

window.addEventListener('load', init)
