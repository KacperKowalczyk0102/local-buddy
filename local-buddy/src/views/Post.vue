<template>

	<div class="post-form-container">
		<h2>Dodaj nowy post</h2>
		<form @submit.prevent="submitPost" class="post-form">
			<div class="form-group">
				<label for="image">Zdjęcie:</label>
				<input type="file" id="image" @change="handleImageChange" accept="image/*" />
			</div>
			<div class="form-group">
				<label for="description">Opis:</label>
				<textarea id="description" v-model="description"></textarea>
			</div>
			<div class="form-group">
				<label for="rating">Ocena:</label>
				<select id="rating" v-model="rating">
					<option value="1">★</option>
					<option value="2">★★</option>
					<option value="3">★★★</option>
					<option value="4">★★★★</option>
					<option value="5">★★★★★</option>
				</select>
			</div>
			<div class="form-group">
				<label for="location">Lokalizacja:</label>
				<input type="text" id="location" v-model="location" @input="searchSuggestions" />
			</div>
			<!-- <ul class="autosuggest-list" v-if="suggestions.length > 0">
				<li v-for="suggest in suggestions" :key="suggest.place_id" @click="selectSuggestion(suggest)">{{ suggest.description }}</li>
			</ul> -->
			<button type="submit">Dodaj post</button>
		</form>
	</div>
</template>

<script>
import { firebaseConfig } from "@/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, getCurrentInstance } from "vue";

export default {
	data() {
		const { proxy } = getCurrentInstance();
		const db = proxy.$db;
		const postsCollection = collection(db, "posts");

		const image = ref(null);
		const description = ref("");
		const rating = ref(0);
		const location = ref("");

		const handleImageChange = (event) => {
			image.value = event.target.files[0];
		};

		const submitPost = async () => {
			try {
				await addDoc(postsCollection, {
					description: description.value,
					rating: rating.value,
					location: location.value,
					createdAt: new Date().toISOString(),
				});
				// reset po dodaniu posta
				this.image = null;
				this.description = "";
				this.rating = 1;
				this.location = "";

				console.log("Post został dodany pomyślnie!");
			} catch (error) {
				console.error("Błąd podczas dodawania postu: ", error);
			}
		};

		return {
			image,
			description,
			rating,
			location,
			handleImageChange,
			submitPost,
		};
		/* return {
			image: null,
			description: "",
			rating: 1,
			location: "",
			suggestions: [],
		};
	},
	mounted() {
		const script = document.createElement("script");
		script.src = `https://maps.googleapis.com/maps/api/js?key=${firebaseConfig.googleKey}&libraries=places`;
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);

		script.onload = () => {
			console.log("Google Maps API załadowany");
			this.initGoogleMaps();
		};
	},
	methods: {
		searchSuggestions() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
						const service = new google.maps.places.AutocompleteService();
						const request = {
							input: this.location,
							location: latLng,
							radius: 10000, // Maksymalny zasięg w metrach od obecnej pozycji
						};
						service.getPlacePredictions(request, (predictions, status) => {
							if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
								this.suggestions = predictions;
							}
						});
					},
					(error) => {
						console.error("Błąd podczas uzyskiwania lokalizacji:", error);
					}
				);
			} else {
				console.error("Twoja przeglądarka nie obsługuje Geolocation API");
			}
		},
		selectSuggestion(suggestion) {
			this.location = suggestion.description;
			this.suggestions = [];
		},
		initGoogleMaps() {
			if (typeof google !== "undefined" && google.maps) {
				console.log("Inicjalizacja Google Maps");
				// Tutaj możesz wywołać funkcje Google Maps, np. geocodowanie
			} else {
				console.error("Google Maps API nie załadowany poprawnie");
			}
		},
		handleImageChange(event) {
			this.image = event.target.files[0];
		},
		submitPost() {
			//logika dodawania posta, można np. wysłać dane do serwera
			console.log({
				image: this.image,
				description: this.description,
				rating: this.rating,
				location: this.location,
			});

			// reset pul w formularzu po dodaniu posta
			this.image = null;
			this.description = "";
			this.rating = 1;
			this.location = "";
		}, */
	},

};
</script>

<style scoped>
.post-form-container {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: #f9f9f9;
}

.post-form {
	display: flex;
	flex-direction: column;
}

.form-group {
	margin-bottom: 20px;
}

label {
	font-weight: bold;
}

input[type="file"],
input[type="text"],
textarea,
select {
	width: 100%;
	padding: 10px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}

button {
	background-color: #af4c7a;
	border: none;
	color: white;
	padding: 15px 20px;
	font-size: 16px;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s;
}

button:hover {
	background-color: #a04583;
}
</style>
