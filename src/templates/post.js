import { guardarConClick} from '../view-controller.js';
import { obtenerPost } from '../controller/publicacion.js';

export const cargarPublicaciones = () => {
    const templatePublicaciones = document.createElement('div');
    const publicaciones = `
        <section id="id_publicaciones" class="formPost">
            <h3>Ingresa tus publicaciones aqui!</h3><br>
            <input type= "textfield" id="id-publicacion">
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
            <button type="button" id = "id-eliminarPost">Eliminar</button>
        </div>
        `;
        listPublicaciones +=contenedorPost;
    });
    const contenedorPublicaciones = document.getElementById("id-contenedorPublicaciones");
    contenedorPublicaciones.innerHTML = listPublicaciones;
};
