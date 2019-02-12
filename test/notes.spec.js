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
        abc134: {
          autor: 'Glory',
          like:0, 
          mensaje : 'Prueba again',
          photo: 'xyz',
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import {eliminarPost, obtenerPost, agregarPost, postLike, editarPost } from "../src/controller/publicacion.js";

describe('agregarPost', () => {
    it('debería ser una función', () => {
      expect(typeof agregarPost).toBe('function');
    });
    it('Debería poder agregar una publicacion', (done) => {
    return agregarPost(' ', 'Glory', 'Prueba publicacion', 0)
    .then(() => obtenerPost(
      (data) => {
        const result = data.find((note) => note.mensaje === 'Prueba publicacion');
        expect(result.mensaje).toBe('Prueba publicacion');
        done()
      }
    ))
  })
})
describe('postLike', () => {
    it('debería ser una función', () => {
      expect(typeof postLike).toBe('function');
    });
    it('Debería poder dar like', (done) => {
    return postLike('abc134', 1 )
    .then(() => obtenerPost(
      (data) => {
        const result = data.find((note) => note.like === 1);
        expect(result.like).toBe(1);
        done()
      }
    ))
  })
})
describe('editarPost', () => {
    it('debería ser una función', () => {
      expect(typeof editarPost).toBe('function');
    });
    it('Debería poder editar una publicacion', (done) => {
    return editarPost('abc134', "Hola de nuevo" )
    .then(() => obtenerPost(
      (data) => {
        const result = data.find((note) => note.mensaje === "Hola de nuevo");
        expect(result.mensaje).toBe("Hola de nuevo");
        done()
      }
    ))
  })
})
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