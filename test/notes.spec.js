import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc123: {
          title: 'Prueba publicacion',
          complete: false
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { agregarPost, obtenerPost } from "../src/controller/publicacion.js";

describe('agregarPost', () => {
  it('Debería porder agregar una publicacion', (done) => {
    return agregarPost('Prueba publicacion')
      .then(() => obtenerPost(
        (data) => {
          const result = data.find((note) => note.title === 'Prueba puublicacion');
          expect(result.title).toBe('Prueba puublicacion');
          done()
        }
      ))
  });
})