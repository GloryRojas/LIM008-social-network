import { templateContenedorPost } from '../templates/post.js';
export const agregarPost = (mensajePost) => {
  let user = firebase.auth().currentUser;
  console.log(mensajePost); 
  firebase.firestore().collection("publicaciones").add({
  photo: user.photoURL,
  autor : user.displayName,
  mensaje : mensajePost,
  fecha : Date(),
  privacidad: "privacidad"
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

/* export const contarLikesConClick = (objPost)=>{
  verLike(objPost.id);
  let contenedorLike= document.getElementById('contenedor-like');
  contenedorLike.innerHTML=contarLike(objPost.id,objPost.like);
} */
  export const eliminarPost = (idMensaje) =>{
  firebase.firestore().collection("publicaciones").doc(idMensaje).delete();
}
export const editarPost = (idMensaje,post) =>{
  firebase.firestore().collection("publicaciones").doc(idMensaje).update({
    mensaje: post
  });
}