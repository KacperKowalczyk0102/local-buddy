import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { firebaseConfig } from "../public/firebaseConfig";
import { initializeApp } from "firebase/app";
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/css/main.scss";
//use bootstrap

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
