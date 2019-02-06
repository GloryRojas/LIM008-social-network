import { 
changeHash,
logWithPasswordAndEmail,
registerEmail,
logWithGoogle,
logWithFacebook,
cerrarSesion,
inicializarFire
 } from '../view-controller.js';

export const iniciarSesion = () => {
    const newdiv = document.createElement('div');
        const formLogin = `
         <section>
           <div class="login">
             <div class="iniciar-sesion">
               <div class="cabecera-login">
                 <img class="logo" src="img/logo.png" alt="">
                 <h1 class="titulo">Infocourse</h1>
                 <span class="slogan">Comparte tus conocimientos y aprende de otros</span>
               </div>
               <form id="form-autenticacion" class="form-autenticacion" action="index.html" method="post">
                 <input class="form " type="text" id="email" placeholder="Correo electrónico"></input>
                 <input class="form" type="password" id="password" placeholder="Contraseña"></input>
                 <button class="btn-login" id="btn-login" type="submit">INICIAR SESIÓN</button>
                 <div class="iconos">
                   <button type="button" id="btn-google" class="formGoogle" ><img class = "iconGoogle" src="img/icono-google.png">Iniciar sesión con Google</button>
                   <button type="button" id="btn-facebook" class="formFacebook"><img class = "iconFacebook" src="img/icono-face.png">Iniciar sesión con Facebook</button><br><br>
                   <a>¿No tienes cuenta?</a>
                   <a id = "btn-registrate">Regístrate AQUI</a>
                 </div><br>
               </form>
             </div>
           </div>
         </section>
        `;
    newdiv.innerHTML = formLogin ;
    const formAutenticacion = newdiv.querySelector('#form-autenticacion')
    formAutenticacion.addEventListener('submit', logWithPasswordAndEmail)
    const btnGoogle = newdiv.querySelector('#btn-google')
    btnGoogle.addEventListener('click', logWithGoogle)
    const btnFacebook = newdiv.querySelector('#btn-facebook')
    btnFacebook.addEventListener('click', logWithFacebook) 
    const btnRegister = newdiv.querySelector('#btn-registrate')
    btnRegister.addEventListener('click', () => {
        changeHash('/register');
    });
    return newdiv;
  };
export const registrarCuenta = () => {
    const newdiv = document.createElement('div');
       const formRegister = `
        <div class="registrarse">
          <img class="logo-registro" src="img/icono-registrar.png" alt="">
         <form id="form-registrar" class="form-registrar" action="index.html" method="post">
           <fieldset>
             <span class="titulo-registrarse">Registrate con tu direccion de correo electronico</span>
             <input class="form" type="text" id="correo" placeholder="Correo electrónico"></input>
             <input class="form" type="password" id="contrasena" placeholder="Contraseña"></input>
             <input class="form" type="password" id="nombres" placeholder="Nombres"></input>
             <h6>Fecha de Nacimiento</h6>
             <input class="form" type="text" id="dia" placeholder="Día"></input>
             <input class="form" type="password" id="mes" placeholder="Mes"></input>
             <input class="form" type="text" id="año" placeholder="Año"></input>
             <button class="btn-login" id="btn-register" type="submit"><span>REGISTRATE</span></button>
           </fieldset>
         </form>
        </div>
         `;
    newdiv.innerHTML = formRegister ; 
    const formRegistrar = newdiv.querySelector('#form-registrar')
    formRegistrar.addEventListener('submit', registerEmail)
    return newdiv;
    };


 export const primeraPantalla = ()=>{
   const userData = inicializarFire()
    const newdiv = document.createElement('div');
         const perfil = `
        <header>
            <div class="contenedor">
                <h1 ><img class="logo" src="img/logo.png" alt="">Infocourse</h1>
                
                <input type="checkbox"  id="btn-menu"><label for="btn-menu" class="icon-menu"></label>
                </header>
                <nav class="menu">
                  <a href="#">Inicio</a>
                  <a href="#">Mi Perfil</a>
                  <a href="#/iniciarSesion" id="btn-cerrar-sesion">Cerrar Sesión </a>     
                </nav>
                <h1 id="nombre"></h1>
            </div>
        </header>
        <div>
        <h1>aqui va</h1>
        
        <img  id="user-photo" class=" " src='' alt="">
        <span id="user-name"></span>
        </div>
        <br>
        <div>
        <textarea name="post" id="post" ></textarea>
        <br>
        <button id="publicar">publicar</button>
        </div>
  
        `;
    
    newdiv.innerHTML = perfil ; 
    const btnCerrarSesion = newdiv.querySelector('#btn-cerrar-sesion')
    btnCerrarSesion.addEventListener('click', () => {
        cerrarSesion();
    });
    return newdiv;
    }