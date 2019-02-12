import { templateContenedorPost } from '../templates/post.js';
export const agregarPost = (photoUser, nameUser, mensajePost,likes) => {
  firebase.firestore().collection("publicaciones").add({
  photo: photoUser,
  autor : nameUser,
  mensaje : mensajePost,
  fecha : Date(),
  privacidad: "privacidad",
  like:likes,
  })
 
 }
export const obtenerPost = () => {
  firebase.firestore().collection("publicaciones").onSnapshot(function(querySnapshot){
    const posts =[];
    querySnapshot.forEach(function(doc){
        posts.push({id: doc.id, ...doc.data()});
        
    })
    templateContenedorPost(posts);
  })
}

export const eliminarPost = (idMensaje) =>{
firebase.firestore().collection("publicaciones").doc(idMensaje).delete();
}
export const editarPost = (idMensaje,post) =>{
  firebase.firestore().collection("publicaciones").doc(idMensaje).update({
    mensaje: post
  });
}