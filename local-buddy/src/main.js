import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/css/main.scss";
//use bootstrap

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
const db = getFirestore();

app.use(router);

app.mount("#app");
app.config.globalProperties.$db = db;
