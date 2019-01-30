import { registerWithEmail } from './autentificacion.js';

export const formRegister = `

   <fieldset>
     <div>
       <h4>Registrate con tu direccion de correo electronico</h4> 
       <form id="form-register" class="" action="index.html" method="post">
         <input class="form" type="text" id="correo" placeholder="Correo electrónico"></input>
         <input class="form" type="password" id="contrasena" placeholder="Contraseña"></input>
         <input class="form" type="password" id="nombres" placeholder="Nombres"></input>
         <h6>Fecha de Nacimiento</h6>
         <input class="form" type="text" id="dia" placeholder="Día"></input>
         <input class="form" type="password" id="mes" placeholder="Mes"></input>
         <input class="form" type="password" id="año" placeholder="Año"></input>

         <button class="form" id="btn-register" type="submit"><span>REGISTRATE</span></button>
       </form>
     </div>
     <div class="">
       <button id="btn-google" class="form" type="submit"><span>Ingresa con Google</span></button>
       <button id="btn-facebook" class="form" type="submit"><span>Ingresa con Facebook</span></button>
     </div>
   </fieldset>

`;

const formIn = document.getElementById('form-in');
formIn.innerHTML = formRegister;
