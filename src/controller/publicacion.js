export const agregarPost = (photoUser, nameUser, mensajePost, likes, privacidad) => { 
  return firebase.firestore().collection("publicaciones").add({
  photo: photoUser,
  autor : nameUser,
  mensaje : mensajePost,
  fecha : Date(),
  privacidad: privacidad,
  like: 0,
  })
 
 }
export const obtenerPost = (callback) => {
  firebase.firestore().collection("publicaciones").onSnapshot(function(querySnapshot){
    const posts =[];
    querySnapshot.forEach(function(doc){
        posts.push({id: doc.id, ...doc.data()});
    })
   callback(posts);
  })
}

export const postLike=(idMensaje,likes)=>{
 return firebase.firestore().collection('publicaciones').doc(idMensaje).update({
      like : likes,
    });
  };

export const eliminarPost = (idMensaje) =>{
  return firebase.firestore().collection("publicaciones").doc(idMensaje).delete();
}
  
export const editarPost = (idMensaje,post) =>{
  return firebase.firestore().collection("publicaciones").doc(idMensaje).update({
    mensaje: post
  });
}

export const filtrarPost = (data, condition) =>{
  let arrFiltrado = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].autor.length; j++) {
        if (data[i].autor[j] === condition) {
          arrFiltrado.push(data[i]);
        }
      }
    return arrFiltrado;
   };
}