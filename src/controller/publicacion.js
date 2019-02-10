import { templateContenedorPost } from '../templates/post.js';
export const agregarPost = (mensajePost) => {
  let user = firebase.auth().currentUser;
  firebase.firestore().collection("publicaciones").add({
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
      console.log(doc.data());
      
        posts.push({id: doc.id, ...doc.data()});
    })
    templateContenedorPost(posts);
  })
}
