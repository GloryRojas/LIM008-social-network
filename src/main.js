import { initRouter } from './router.js'
import { inicializarFire } from './view-controller.js';
const init = () => {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAs6PO8-5P1Y3i_qX_jaXnUeF44OYmpgZc",
        authDomain: "lim008-social-network.firebaseapp.com",
        databaseURL: "https://lim008-social-network.firebaseio.com",
        projectId: "lim008-social-network",
        storageBucket: "lim008-social-network.appspot.com",
        messagingSenderId: "3950063519"
      };
      firebase.initializeApp(config);
      inicializarFire()
  
      initRouter();
  }
  
  window.onload = init();
 // window.addEventListener('load', init)

