// importamos la funcion que vamos a testear

import { ingresarConCorreoYContrasena, ingresarConGoogle, ingresarConFacebook, registroConCorreo, cerrarSesion } from "../src/controller/autentificacion.js";
import { agregarPost, obtenerPost } from "../src/controller/publicacion.js";;

// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);


describe('ingresarConCorreoYContrasena', () => {
  it('debería ser una función', () => {
    expect(typeof ingresarConCorreoYContrasena).toBe('function');
  });
  it('Debería poder iniciar sesion', () => {
    return ingresarConCorreoYContrasena('grojasm@gmail.com', 'grojasm')
      .then((user) => {
        expect(user.email).toBe('grojasm@gmail.com')
      })
  });
});
describe('ingresarConGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof ingresarConGoogle).toBe('function');
  });
});
describe('ingresarConFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof ingresarConFacebook).toBe('function');
  });
});
describe('registroConCorreo', () => {
  it('debería ser una función', () => {
    expect(typeof registroConCorreo).toBe('function');
  });
  it('Debería poder registrar', () => {
    return registroConCorreo('lucero@gmail.com', 'lucero')
      .then((user) => {
        expect(user.email).toBe('lucero@gmail.com')
      })
  });
});
describe('cerrarSesion', () => {
  it('debería ser una función', () => {
    expect(typeof cerrarSesion).toBe('function');
  });
});
describe('agregarPost', () => {
  it('debería ser una función', () => {
    expect(typeof agregarPost).toBe('function');
  });
});
describe('obtenerPost', () => {
  it('debería ser una función', () => {
    expect(typeof obtenerPost).toBe('function');
  });
});
