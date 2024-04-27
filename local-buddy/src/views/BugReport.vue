<template>
	<div class="post-page bg-feed">
		<div class="container d-flex justify-content-center my-5">
			<div class="row-md-6">
				<form @submit.prevent="submitError" class="bugReport-form py-4 px-5">
					<!-- Pole do wpisania błędu -->
					<h2 class="pb-1">Zgłoś błąd</h2>
					<label for="bugTitle">Tytuł:</label>
					<input type="text" class="form-control" v-model="bugTitle" placeholder="Tytuł" required />
					<label for="stepsToReproduce">Kroki do odtworzenia błędu:</label>
					<textarea class="p-5 form-control" v-model="stepsToReproduce" required></textarea>
					<label for="bugReport ">Opisz błąd:</label>
					<textarea class="p-5 form-control" id="bugReport" v-model="bugReportDescription" required></textarea>
					<div class="d-flex align-items-center mb-5">
						<label class="form-check-label my-0 mx-2">Czy błąd jest krytyczny:</label>
						<input class="form-check-input" type="checkbox" v-model="critical" />
					</div>
					<div class="d-flex flex-column gap-2 justify-content-center align-items-center">
						<button class="btn btn-danger" type="submit">Zgłoś</button>
						<button class="btn btn-dark" @click.prevent="goToFeed">Wróć</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
import { collection, addDoc } from "firebase/firestore";
import { ref, getCurrentInstance, inject } from "vue";
export default {
	setup() {
		const db = getCurrentInstance().appContext.config.globalProperties.$db;
		const bugReportCollection = collection(db, "bugReport");
		const bugReportDescription = ref("");
		const bugTitle = ref("");
		const stepsToReproduce = ref("");
		const critical = ref(false);
		const submitError = async () => {
			try {
				await addDoc(bugReportCollection, {
					description: bugReportDescription.value,
					title: bugTitle.value,
					steps: stepsToReproduce.value,
					isCritical: critical.value,
				});
				// Wyczyszczenie formularza po zapisaniu danych
				console.log("Błąd został zgłoszony pomyślnie.");
				bugReportDescription.value = "";
				bugTitle.value = "";
				stepsToReproduce.value = "";
			} catch (error) {
				console.error("Błąd podczas zgłaszania błędu:", error);
			}
		};

		const goToFeed = inject("goToFeed");

		return {
			bugReportDescription,
			submitError,
			bugTitle,
			stepsToReproduce,
			critical,
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
