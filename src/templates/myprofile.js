
export const cargarMiPerfil = () => {
    const miPerfil = document.createElement('div');
    const usuario = firebase.auth().currentUser;
    const data = firebase.firestore().collection("publicaciones");
    console.log(data)
    console.log(usuario)
    const datosUsuario = `
       <div class="miPerfil">
         <h4>MI PERFIL</h4>
         <h3 id="id-nombre">${usuario.displayName}</h3>
         <img class="foto-perfil" src="${usuario.photoURL}">
       </div>
    `;
    miPerfil.innerHTML = datosUsuario;
    return miPerfil;
};