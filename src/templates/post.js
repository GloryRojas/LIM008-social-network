import { guardarConClick,eliminarMensajeConClick,editarMensajeConClick, editarGuardarMensajeConClick,likesConClick  } from '../view-controller.js';
import { obtenerPost} from '../controller/publicacion.js';

export const cargarPublicaciones = () => {
    const templatePublicaciones = document.createElement('div');
    const publicaciones = `
        <section id="id_publicaciones" class="form-post font1" >
            <h3>Crear Publicación!</h3>
            <p id="id-MensajeError"></p>
            <textarea id="id-publicacion" class="id-publicacion font1" cols="40" rows="5" autofocus placeholder="Cuéntanos tu última aventura!!" ></textarea>
            <select id="id-privacidad" class='font1'>
                <option value="Publico">Público</option>
                <option value="Privado">Privado</option>
            </select>
            <button id = "id-save" class='font1 publicar'>Publicar</button>
        </section>
        <section id="id_contenedor">
            <ul id="id-contenedorPublicaciones" class= "form-post contenedor-publicaciones"></ul>
        </section>
    `;
    templatePublicaciones.classList.add('publicar-post');
    templatePublicaciones.innerHTML=publicaciones;
    const btnGuardarPost = templatePublicaciones.querySelector('#id-save');
    btnGuardarPost.addEventListener('click',guardarConClick);
    obtenerPost(templateContenedorPost);   
  return templatePublicaciones;
}

export const templateContenedorPost = (data)=>{
    let listPublicaciones = '';
    data.forEach((doc)=>{
        const fecha = doc.fecha;
        const fechaMostrar = fecha.slice(0, fecha.lastIndexOf('G'));
        const contenedorPost = `
        <div class="info-post form-post font1">
            <p id ="id-contenedorPost" class ="contenedor-post">${doc.autor}</p>
            <p id ="id-fecha" class ="contenedor-post" >${fechaMostrar}</p>
            <textarea id ="btn-${doc.id}" class ="contenedor-mensaje" readonly>${doc.mensaje}</textarea>
            <div>
            <button type="button" id ="btnEditar-${doc.id}" class="btn-editar font1">Editar</button>
            <button type="button" id ="btnEliminar-${doc.id}" class="btn-GuardarCambios font1">Guardar</button>
            <img src="img/garbage.png" id ="${doc.id}" class="btn-eliminar font1" alt="eliminar">
            <img src="img/like.png" id ="${doc.id}" class="btn-like font1" data-like=${doc.like} alt = "like">
            <label id="contenedor-like">${doc.like}</label>
            </div>
        </div>
        `;
        listPublicaciones +=contenedorPost;
    });
    const contenedorPublicaciones = document.getElementById('id-contenedorPublicaciones');
    contenedorPublicaciones.innerHTML = listPublicaciones;
    
    [...document.getElementsByClassName('btn-eliminar')].forEach(function(btnEliminar){
        btnEliminar.addEventListener('click', eliminarMensajeConClick);
    });
    [...document.getElementsByClassName('btn-editar')].forEach(function(btnEditar){
        btnEditar.addEventListener('click', editarMensajeConClick);
    });
    [... document.getElementsByClassName('btn-like')].forEach((btnLike)=>{
        btnLike.addEventListener('click',(e)=>{
            let likes = parseInt(e.target.dataset.like);
            likes++;  
            likesConClick(e.target.id , likes);         
        });
    });
    [...document.getElementsByClassName('btn-GuardarCambios')].forEach(function(btnEditarGuardar){
        btnEditarGuardar.addEventListener('click', editarGuardarMensajeConClick);
    }); 
};


