import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJeUcWw1aB7QE80CpE56lsFJAA6War48w",
  authDomain: "localbuddy-6a06e.firebaseapp.com",
  projectId: "localbuddy-6a06e",
  storageBucket: "localbuddy-6a06e.appspot.com",
  messagingSenderId: "965692683175",
  appId: "1:965692683175:web:5a65a4bc92849c0cdefc82",
  measurementId: "G-XF8Z2TQKYG"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App);

app.use(router);

app.mount('#app');

