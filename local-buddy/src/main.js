import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseConfig } from '../public/firebaseConfig';
import { initializeApp } from "firebase/app";



// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App);

app.use(router);

app.mount('#app');

