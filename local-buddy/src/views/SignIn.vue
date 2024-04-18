<template>
	<!-- <h1>Zaloguj się</h1>
	<p><input type="text" placeholder="Email" v-model="email" /></p>
	<p><input type="password" placeholder="Hasło" v-model="password" /></p>
	<p v-if="errMsg">{{ errMsg }}</p>
	<p><button @click="logIn">Zaloguj się</button></p>
	<p><button @click="logInWithGoogle">Zaloguj się z google</button></p> -->
	<section id="login" class="bg-aniamtion">
		<div class="container d-flex justify-content-center align-items-center min-vh-100">
			<div class="row border rounded-5 p-3 bg-white shadow box-area">
				<div v-if="isMobile" class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
					<div class="featured-image mb-3">
						<img :src="imgSrc" class="img-fluid rounded-4" id="login-image" />
					</div>
				</div>

				<div class="col-md-6 right-box">
					<div class="row align-items-center">
						<div class="header-text mb-4">
							<h2>Zaloguj się</h2>
							<p>Witaj ponownie, znajdź nowe miejsca</p>
						</div>
						<div class="input-group mb-3 mt-5">
							<input type="email" class="form-control form-control-lg bg-light fs-6" placeholder="Email" v-model="email" />
						</div>
						<div class="input-group mb-1">
							<input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Hasło" v-model="password" />
						</div>
						<div class="input-group mb-5 d-flex justify-content-between"></div>
						<div class="input-group mb-3">
							<button @click="logIn" class="btn btn-lg btn-primary w-100 fs-6">Zaloguj</button>
						</div>
						<div class="input-group mb-3">
							<button @click="logInWithGoogle" class="btn btn-lg btn-light w-100 fs-6">
								<img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" style="width: 20px" class="me-2" /><small
									>Zaloguj się przez Google</small
								>
							</button>
						</div>
						<div class="row">
							<small>Nie masz jeszcze konta? <a @click.prevent="goToRegister" href="">Zarejestruj się</a></small>
						</div>
					</div>
				</div>

				<div v-if="!isMobile" class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
					<div class="featured-image mb-3">
						<img :src="imgSrc" class="img-fluid rounded-4" id="register-image" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
import largeImage from "../assets/images/login.png";
import smallImage from "../assets/images/logov2text.svg";

const email = ref("");
const password = ref("");
const errMsg = ref(""); // ERROR MESSAGE
const router = useRouter();

let imgSrc = ref(largeImage);
let width = ref(window.innerWidth);
let isMobile = false;

const logIn = () => {
	signInWithEmailAndPassword(getAuth(), email.value, password.value)
		.then((data) => {
			console.log("Zarejestrowano pomyślnie");
			console.log(auth.currentUser);
			router.push("/feed");
		})
		.catch((error) => {
			console.log(error.code);
			switch (error.code) {
				case "auth/invalid-email":
					errMsg.value = "Niepoprawny email";
					break;
				case "auth/user-not-found":
					errMsg.value = "Użytkownik nie istnieje";
					break;
				case "auth/wrong-password":
					errMsg.value = "Niepoprawne hasło";
					break;
				default:
					errMsg.value = "Email bądź hasło są niepoprawne";
					break;
			}
		});
};

const logInWithGoogle = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(getAuth(), provider)
		.then((result) => {
			console.log(result.user);
			router.push("/feed");
		})
		.catch((error) => {});
};

const updateDimensions = () => {
	width.value = window.innerWidth;
	imgSrc.value = width.value <= 750 ? smallImage : largeImage;
	isMobile = width.value <= 750;
};

onMounted(() => {
	window.addEventListener("resize", updateDimensions);
	updateDimensions();
});

onUnmounted(() => {
	window.removeEventListener("resize", updateDimensions);
});

const goToRegister = () => {
	router.push("/register");
};
</script>

<style>
/* Opcjonalne style CSS */
</style>
