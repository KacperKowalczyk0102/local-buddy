<template>
	<section id="home" class="bg-aniamtion min-vh-100">
		<div class="px-4 py-5 mx-5 text-center">
			<img class="d-block mx-auto mb-4" src="../assets/images/logov2ALL.svg" alt="LocalBuddy" height="400rem" />
			<h1 class="display-5 fw-bold text-body-emphasis">Zainspiruj się</h1>
			<div class="col-lg-6 mx-auto">
				<p class="lead mb-4">Odkrywaj i polecaj ciekawe miejsca w twojej okolicy. Znajdź inspirację na wycieczki, weekendy i wakacje.</p>
				<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<button type="button" class="btn btn-dark btn-lg px-4 gap-3">Zarejestruj się</button>
					<button type="button" class="btn btn-dark btn-lg px-4">Zaloguj się</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();

export default {
	name: "Home",
	setup() {
		const router = useRouter();

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

		return {};
	},
};
</script>

<style></style>
