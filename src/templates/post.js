import { guardarConClick} from '../view-controller.js';
import { obtenerPost } from '../controller/publicacion.js';

export const cargarPublicaciones = () => {
    const templatePublicaciones = document.createElement('div');
    const publicaciones = `
        <section id="id_publicaciones" class="formPost" >
            <h3>Ingresa tus publicaciones aqui!</h3><br>
            <textarea type= "textfield" id="id-publicacion" class="id-publicacion" cols="50" rows="5"  autofocus placeholder="publica aqui" ></textarea>
            <button id = "id-save">guardar</button>
            <select>
                    <option value="Publico">Publico</option>
                    <option value="Privado">Privado</option>
            </select>
        </section>
        <section id="id_contenedor">
            <div>
                <h3>Tus publicaciones aqui!</h3><br>
                <ul id="id-contenedorPublicaciones" class= "contenedor-publicaciones"></ul>
            </div>
        </section>
    `;
    templatePublicaciones.innerHTML=publicaciones;
    const btnGuardarPost = templatePublicaciones.querySelector("#id-save");
    btnGuardarPost.addEventListener("click",guardarConClick);
    obtenerPost();
  return templatePublicaciones;
}
export const templateContenedorPost = (data)=>{
    let listPublicaciones = "";
    console.log(data);
    
    data.forEach((data)=>{
        const contenedorPost = `
        <div>
            <p id ="id-contenedorPost" class ="contenedor-post">${data.autor}</p>
            <p id ="id-contenedorPost" class ="contenedor-post">${data.mensaje}</p>
            <p id ="id-contenedorPost" class ="contenedor-post">${data.fecha}</p>
            <button type="button">Editar</button>
            <img src="img/garbage.png" type="button" id = "id-eliminarPost">
            <img src="img/like.png" type="button" id ="btn-megusta">
            <label  id="contenedor-like"></label>
        </div>
        `;

    listPublicaciones +=contenedorPost;
    
    });
   
    const contenedorPublicaciones = document.getElementById("id-contenedorPublicaciones");
    contenedorPublicaciones.innerHTML = listPublicaciones;

    };
   