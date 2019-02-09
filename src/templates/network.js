import{cerrarSesion} from '../controller/autentificacion.js';

export const menuNavegacionHome = () => {
  //Carga de Header/home
  const formCerrarSesion = document.createElement('div');
  const pantallaPrincipal = `
  <header>
    <div class="contenedor">
            <img class="logo" src='img/logo-home.png' alt=""><h1 class="bienvenidx">Infocourse</h1>
          <input type="checkbox"  id="btn-menu"><label for="btn-menu" class="icon-menu"></label>
          <nav class="menu">
               <a href="#">Inicio</a>
               <a href="#">Mi Perfil</a>
               <a href="#" id="btn-cerrar-sesion">Cerrar Sesión </a>     
          </nav>
    </div>
  </header>

  </div>
  <div id="datos-usuario">
  </div>
  <div class="" id="id-post">
    <section id="id_publicaciones" class="formPost">
      <h3>Ingresa tus publicaciones aqui!</h3><br>
      <input type= "textfield" id="id-publicacion">
      <button id = "id-save">guardar</button>
    </section>
    <section id="id_contenedor">
      <h3>Tus publicaciones aqui!</h3><br>
      <ul id="id-contenedorPublicaciones" class= "contenedor-publicaciones"></ul>
    </section>
  
  `;
  //const datosUsuario = document.getElementById('datos-usuario');
  //datosUsuario.innerHTML=inicializarFire();
  formCerrarSesion.innerHTML = pantallaPrincipal;
  //subir info
  
   const inicializarFire = () => {
    firebase.auth().onAuthStateChanged(()=>{
        const user = firebase.auth().currentUser;
        let photo, name;
        if (user !== null) {
             name = user.displayName;
             photo = user.photoURL;
            console.log(name,photo); 
            const nameInfo=`
            <p>${name}</p>
            <img src="${photo}">`;
            const datosUsuario = document.getElementById('datos-usuario'); 
            datosUsuario.innerHTML= nameInfo;
            //menuNavegacionHome(displayName, photoURL);

        } else {
            console.log('hola')
        }     
        } );
       console.log(inicializarFire());

        }

  //Cargar de Post
  const collectionRef = firebase.firestore().collection("publicaciones");
  const agregarPost = (mensajePost) => {
      let user = firebase.auth().currentUser;
      collectionRef.add({
      autor : user.displayName,
      mensaje : mensajePost,
      like:"0",
      fecha : Date(),
      privacidad: "Publico o privado",
      })
  }
  const btnGuardarPost = formCerrarSesion.querySelector("#id-save")
  const publicarMensaje = () => {
      const valorMensaje = formCerrarSesion.querySelector("#id-publicacion").value;
      agregarPost(valorMensaje);
  }
  btnGuardarPost.addEventListener('click', publicarMensaje);
  
  
  const obtenerPost = () => {
    //console.log(collectionRef);
    collectionRef.onSnapshot(function(querySnapshot){
        const posts =[];
        querySnapshot.forEach(function(doc){
            posts.push(doc.data().mensaje)
        })
        console.log(posts)
        templateContenedorPost(posts)
    })
}
obtenerPost()


  //Carga de Cerrar Sesión
  const btnCerrarSesion = formCerrarSesion.querySelector('#btn-cerrar-sesion');
  btnCerrarSesion.addEventListener('click', cerrarSesion);
    return formCerrarSesion;
}
