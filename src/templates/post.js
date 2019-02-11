import { guardarConClick} from '../view-controller.js';
import { obtenerPost, contarLikesConClick} from '../controller/publicacion.js';

export const cargarPublicaciones = () => {
    const templatePublicaciones = document.createElement('div');
    
    const publicaciones = `
        <section id="id_publicaciones" class="formPost" >
            <h3 >Ingresa tus publicaciones aqui!</h3><br>
            <div class="text-boton-post">
            <textarea type= "textfield" id="id-publicacion" class="id-publicacion" cols="50" rows="5"  autofocus placeholder="publica aqui" ></textarea>
            <button id = "id-save">guardar</button>
            </div>
            <select>
                    <option value="Publico">Publico</option>
                    <option value="Privado">Privado</option>
            </select>
        </section>
        <section id="id_contenedor">
            <div>
                <h3 class="ingresar-post-aqui">Tus publicaciones aqui!</h3><br>
                <ul id="id-contenedorPublicaciones" class= "contenedor-publicaciones"></ul>
            </div>
        </section>
    `;
    templatePublicaciones.innerHTML=publicaciones;
    const btnGuardarPost = templatePublicaciones.querySelector("#id-save");

    btnGuardarPost.addEventListener("click",contarLikesConClick);
    obtenerPost();

    
  return templatePublicaciones;
}

export const templateContenedorPost = (data)=>{
    let listPublicaciones = "";
   
    
    data.forEach((data)=>{

        const contenedorPost = `
        <div>
        <div>
        <p class ="contenedor-post">${data.photoURL}</p>
        </div>
        <div class ="info-post" >
            
            <p id ="id-contenedorPost" class ="contenedor-post">${data.autor}</p>
            <p id ="id-contenedorPost" class ="contenedor-post">${data.mensaje}</p>
            <p id ="id-contenedorPost" class ="contenedor-post">${data.fecha}</p>
        </div>
            <button class="btn-editar" type="button">Editar</button>
            <img src="img/garbage.png" class="btn-eliminar" type="button" id = "id-eliminarPost">
            <img src="img/like.png" type="button"  class="btn-like" id ="${data.fecha}">
            <label  id="contenedor-like"></label>
        </div>
        `;

    listPublicaciones +=contenedorPost;
    });
    const contenedorPublicaciones = document.getElementById("id-contenedorPublicaciones");
    contenedorPublicaciones.innerHTML = listPublicaciones;
   [...document.getElementsByClassName("btn-like")].forEach((btnLike)=>{
       btnLike.addEventListener('click',contarLikesConClick());
   });  
 }
 