<template>
	Home
	<button v-if="isUserLoggedIn" @click="logout" class="btn btn-primary">Wyloguj</button>
	<div class="container">aaa</div>
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
		const isUserLoggedIn = ref(false);

		const logout = async () => {
			try {
				await signOut(auth);
				console.log("Wylogowano pomyślnie");
			} catch (error) {
				console.error("Błąd podczas wylogowywania", error);
			}
		};

		onMounted(() => {
			console.log("Home mounted");
			onAuthStateChanged(auth, (user) => {
				if (user) {
					// Użytkownik jest zalogowany.
					console.log("Użytkownik jest zalogowany");
					isUserLoggedIn.value = true;
					/* router.push("/feed"); */
				} else {
					// Użytkownik jest wylogowany.
					console.log("Użytkownik jest wylogowany");
					isUserLoggedIn.value = false;
				}
			});
		});

		return { logout, isUserLoggedIn };
	},
};
</script>

<style></style>
