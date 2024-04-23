<template>
	<!-- MENU FOR MOBILES -->
	<div v-if="isMobile" class="custom-footer">
		<ul class="nav nav-tabs d-flex justify-content-between mx-5" role="tablist">
			<li class="nav-item">
				<a href="#" @click.prevent="goToFeed" class="nav-link px-2 text-body-secondary nav-link">
					<!-- Home -->
					<svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
						<path
							d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"
						/>
						<path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a @click.prevent="goToPost" href="#" class="nav-link px-2 text-body-secondary nav-link active">
					<!-- post -->
					<svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
						<path
							d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"
						/>
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link px-2 text-body-secondary nav-link">
					<!-- Notification -->
					<svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
						<path
							d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"
						/>
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link px-2 text-body-secondary nav-link">
					<!-- Profile -->
					<svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
						<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
						<path
							fill-rule="evenodd"
							d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</div>
	<section class="bg-feed d-flex justify-content-center align-items-center" style="height: 100vh">
		<div class="container">
			<div class="row d-flex align-items-center justify-content-center">
				<!-- SIDEBAR FOR DESKTOPS -->
				<div v-if="!isMobile" class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary fixed-left col-md-3 sidebar">
					<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
						<svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
						<span class="fs-4">Sidebar</span>
					</a>
					<hr />
					<ul class="nav nav-pills flex-column mb-auto">
						<li class="nav-item">
							<a href="#" class="nav-link active" aria-current="page">
								<svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
								Home
							</a>
						</li>
						<li>
							<a href="#" class="nav-link link-body-emphasis">
								<svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
								Dashboard
							</a>
						</li>
						<li>
							<a href="#" class="nav-link link-body-emphasis">
								<svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
								Orders
							</a>
						</li>
						<li>
							<a href="#" class="nav-link link-body-emphasis">
								<svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
								Products
							</a>
						</li>
						<li>
							<a href="#" class="nav-link link-body-emphasis">
								<svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
								Customers
							</a>
						</li>
					</ul>
					<hr />
					<div class="dropdown">
						<a
							href="#"
							class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
							<strong>mdo</strong>
						</a>
						<ul class="dropdown-menu text-small shadow">
							<li><a class="dropdown-item" href="#">New project...</a></li>
							<li><a class="dropdown-item" href="#">Settings</a></li>
							<li><a class="dropdown-item" href="#">Profile</a></li>
							<li><hr class="dropdown-divider" /></li>
							<li><a class="dropdown-item" href="#">Sign out</a></li>
						</ul>
					</div>
				</div>

				<!-- MAIN CONTENT -->
				<div class="col-md-6">
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
								<label for="region">Region</label>
								<select id="region" v-model="region">
									<option value="dolnośląskie">Dolnośląskie</option>
									<option value="kujawsko-pomorskie">Kujawsko-pomorskie</option>
									<option value="lubelskie">Lubelskie</option>
									<option value="lubuskie">Lubuskie</option>
									<option value="łódzkie">Łódzkie</option>
									<option value="małopolskie">Małopolskie</option>
									<option value="mazowieckie">Mazowieckie</option>
									<option value="opolskie">Opolskie</option>
									<option value="podkarpackie">Podkarpackie</option>
									<option value="podlaskie">Podlaskie</option>
									<option value="pomorskie">Pomorskie</option>
									<option value="śląskie">Śląskie</option>
									<option value="świętokrzyskie">Świętokrzyskie</option>
									<option value="warmińsko-mazurskie">Warmińsko-mazurskie</option>
									<option value="wielkopolskie">Wielkopolskie</option>
									<option value="zachodniopomorskie">Zachodniopomorskie</option>
								</select>
							</div>
							<div class="form-group">
								<label for="location">Lokalizacja:</label>
								<input type="text" id="location" v-model="location" />
								<!--  to było w tym ninpucie@input="searchSuggestions" -->
							</div>
							<ul class="autosuggest-list" v-if="suggestions.length > 0">
								<li v-for="suggest in suggestions" :key="suggest.place_id" @click="selectSuggestion(suggest)">{{ suggest.description }}</li>
							</ul>
							<button type="submit">Dodaj post</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, getCurrentInstance, onMounted } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "@/firebaseConfig.js";

export default {
	setup() {
		const db = getCurrentInstance().appContext.config.globalProperties.$db;
		const postsCollection = collection(db, "posts");
		const router = useRouter();
		const isMobile = ref(window.innerWidth <= 768);
		window.addEventListener("resize", () => {
			isMobile.value = window.innerWidth <= 768;
		});

		const image = ref(null);
		const description = ref("");
		const rating = ref(0);
		const location = ref("");
		const region = ref("");
		const suggestions = ref([]);

		onMounted(async () => {
			try {
				isMobile.value = window.innerWidth <= 768;
			} catch (error) {
				console.error("Błąd podczas pobierania danych:", error);
			}
			const script = document.createElement("script");
			/* script.src = `https://maps.googleapis.com/maps/api/js?key=${firebaseConfig.googleKey}&libraries=places`; */
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);

			/* script.onload = () => {
				console.log("Google Maps API załadowany");
				initGoogleMaps();
			}; */
		});

		const handleImageChange = (event) => {
			image.value = event.target.files[0];
		};
		const goToFeed = () => {
			router.push("/feed");
		};
		/* const searchSuggestions = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
						const service = new google.maps.places.AutocompleteService();
						const request = {
							input: location.value,
							location: latLng,
							radius: 10000,
						};
						service.getPlacePredictions(request, (predictions, status) => {
							if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
								suggestions.value = predictions;
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
		};
		const selectSuggestion = (suggestion) => {
			location.value = suggestion.description;
			suggestions.value = [];
		};
		const initGoogleMaps = () => {
			if (typeof google !== "undefined" && google.maps) {
				console.log("Inicjalizacja Google Maps");
			} else {
				console.error("Google Maps API nie załadowany poprawnie");
			}
		}; */
		const submitPost = async () => {
			try {
				const imageRef = storageRef(getStorage(), "images/" + image.value.name);

				await uploadBytes(imageRef, image.value);
				const url = await getDownloadURL(imageRef);
				await addDoc(postsCollection, {
					description: description.value,
					rating: rating.value,
					location: location.value,
					createdAt: new Date(),
					region: region.value,
					imageUrl: url,
				});
				image.value = null;
				description.value = "";
				rating.value = 1;
				location.value = "";
				region.value = "";
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
			region,
			handleImageChange,
			submitPost,
			isMobile,
			goToFeed,
			/* searchSuggestions,
			selectSuggestion, */
			suggestions,
		};
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
