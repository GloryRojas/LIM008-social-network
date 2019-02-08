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
  </div>
  <div id="datos-usuario">
  </div>
  `;
  //const datosUsuario = document.getElementById('datos-usuario');
  //datosUsuario.innerHTML=inicializarFire();
  formCerrarSesion.innerHTML = pantallaPrincipal;

  //Cargar de Post
  const collectionRef = firebase.firestore().collection("publicaciones");
  const agregarPost = (mensajePost) => {
      collectionRef.add({
      autor : "user.display",
      mensaje : mensajePost,
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
  
  const contenedorPublicaciones = formCerrarSesion.querySelector("#id-contenedorPublicaciones");
  const obtenerPost = () => {
    collectionRef.onSnapshot(function(querySnapshot){
        const posts =[];
        querySnapshot.forEach(function(doc){
            posts.push(doc.data().mensaje)
        })
        const templateContenedorPost = (data)=>{
            let listPublicaciones = "";
            data.forEach((data)=>{
                const templateContenedorPost = `
                <div>
                    <p id ="id-contenedorPost" class ="contenedor-post">${data}</p>
                    <button type="button">Editar</button>
                    <button type="button">Eliminar</button>
                </div>
                `;
                listPublicaciones += templateContenedorPost;
            });
            contenedorPublicaciones.innerHTML = listPublicaciones;
        };
        templateContenedorPost(posts)
    })
}
obtenerPost()

  //Carga de Cerrar Sesión
  const btnCerrarSesion = formCerrarSesion.querySelector('#btn-cerrar-sesion');
  btnCerrarSesion.addEventListener('click', cerrarSesion);
    return formCerrarSesion;
}
