<template>
	<section class="d-flex justify-content-center align-items-center bg-aniamtion" style="height: 100vh">
		<div class="container d-flex justify-content-center">
			<div class="row-md-6">
				<form @submit.prevent="submitRating" class="bugReport-form py-4 px-5">
					<!-- Pole do wpisania błędu -->
					<h2 class="pb-1">Ocena aplikacji</h2>
					<label for="rating">Ocena:</label>
					<select id="rating" v-model.number="selectedRating" required>
						<option value="5">★★★★★</option>
						<option value="4">★★★★</option>
						<option value="3">★★★</option>
						<option value="2">★★</option>
						<option value="1">★</option>
					</select>
					<!-- Pole do wpisania komentarza -->
					<label for="comment">Komentarz:</label>
					<textarea id="comment" v-model="comment" required></textarea>
					<div class="d-flex flex-column gap-2 justify-content-center align-items-center">
						<button class="btn btn-danger" type="submit">Zgłoś</button>
						<button class="btn btn-dark" @click.prevent="goToFeed">Wróć</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>
<script>
import { collection, addDoc } from "firebase/firestore";
import { ref, getCurrentInstance, inject } from "vue";
export default {
	setup() {
		const db = getCurrentInstance().appContext.config.globalProperties.$db;
		const ratingCollection = collection(db, "ratings");

		const selectedRating = ref("");
		const comment = ref("");
		const submitRating = async () => {
			try {
				await addDoc(ratingCollection, {
					rating: selectedRating.value,
					comment: comment.value,
				});
				// Wyczyszczenie formularza po zapisaniu danych
				selectedRating.value = "";
				comment.value = "";
				console.log("Dane zostały zapisane w bazie danych Firebase.");
			} catch (error) {
				console.error("Błąd podczas zapisywania danych:", error);
			}
		};
		const goToFeed = inject("goToFeed");
		return {
			selectedRating,
			comment,
			submitRating,
			goToFeed,
		};
	},
};
</script>
<style scoped>
h2 {
	font-weight: bold;
}
.bugReport-form {
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: #f9f9f9;
}
label {
	display: block;
	margin-top: 20px;
}
textarea {
	width: 100%;
	padding: 10px;
	margin-top: 5px;
	margin-bottom: 20px;
}
button {
	width: 70%;
	padding: 10px 20px;

	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
</style>
