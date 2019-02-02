// Este es el punto de entrada de tu aplicacion
/*
import { myFunction } from './lib/index.js';

myFunction(); */

import { iniciarSesion, registrarCuenta } from './lib/templatesLogin.js';

const init = function() {
 iniciarSesion();

}

window.addEventListener('load', init)
