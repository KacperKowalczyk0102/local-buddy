<template>
	<section id="home" class="bg-aniamtion min-vh-100">
		<div class="px-4 py-5 mx-5 text-center">
			<img class="d-block mx-auto mb-4 img-fluid" src="../assets/images/logov2ALL.svg" alt="LocalBuddy" id="home-image" />
			<h1 class="display-5 fw-bold text-body-emphasis">Zainspiruj się</h1>
			<div class="col-lg-6 mx-auto pb-5">
				<p class="lead mb-4">Odkrywaj i polecaj ciekawe miejsca w twojej okolicy. Znajdź inspirację na wycieczki, weekendy i wakacje.</p>
				<div class="d-grid gap-2 d-sm-flex justify-content-sm-center pb-5">
					<button @click="goToRegister" type="button" class="btn btn-dark btn-lg px-4 gap-3">Zarejestruj się</button>
					<button @click="goToLogin" type="button" class="btn btn-dark btn-lg px-4">Zaloguj się</button>
				</div>
			</div>
		</div>
		<footer class="py-3 mt-4">
			<ul class="nav justify-content-center pb-3 mb-3">
				<li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
				<!-- <li class="nav-item"><a href="#" @click.prevent="goToRating" class="nav-link px-2 text-body-secondary">Oceń nas</a></li>
				<li class="nav-item"><a href="#" @click.prevent="goToBugReport" class="nav-link px-2 text-body-secondary">Zgłoś problem</a></li> -->
			</ul>
			<hr />
			<p class="text-center text-body-secondary mx-5">
				2024 <br />
				This website is a project created for educational purposes as part of a university course. <br />
				We do not claim ownership of any trademarks, logos, or intellectual property displayed on this site. <br />
				All content used is for demonstration and learning purposes only.
			</p>
		</footer>
	</section>
</template>

<script>
import { onMounted, ref, inject } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();

export default {
	name: "Home",
	setup() {
		const router = useRouter();
		/* const goToBugReport = inject("goToBugReport");
		const goToRating = inject("goToRating"); */

		onMounted(() => {
			console.log("Home mounted");
			onAuthStateChanged(auth, (user) => {
				if (user) {
					// Użytkownik jest zalogowany.
					console.log("Użytkownik jest zalogowany");

					router.push("/feed");
				} else {
					// Użytkownik jest wylogowany.
					console.log("Użytkownik jest wylogowany");
				}
			});
		});

		const goToLogin = () => {
			router.push("/signin");
		};
		const goToRegister = () => {
			router.push("/register");
		};

		return { goToLogin, goToRegister /* goToBugReport, goToRating */ };
	},
};
</script>

<style></style>
