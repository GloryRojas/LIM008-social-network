import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    publicaciones: {
      __doc__: {
        abc123: {
          autor: 'Glory',
          like:0, 
          mensaje : 'Prueba publicacion',
          photo: 'xyz',
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import {eliminarPost } from "../src/controller/publicacion.js";

describe('eliminarPost', () => {
  it('debería ser una función', () => {
    expect(typeof eliminarPost).toBe('function');
  });
  it('Debería poder eliminar una publicacion', (done) => {
   return eliminarPost('abc123')
   .then(() => obtenerPost(
    (data) => {
      const result = data.find((note) => note.id === 'abc123');
      expect(result).toBe(undefined);
      done()
    }
  ))
})
})
