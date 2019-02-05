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

// importamos la funcion que vamos a testear

import { ingresarConCorreoYContrasena, ingresarConGoogle, ingresarConFacebook, cambiarHash } from "../src/lib/autentificacion.js";

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
describe('cambiarHash', () => {
  it('debería ser una función', () => {
    expect(typeof cambiarHash).toBe('function');
  });
});

