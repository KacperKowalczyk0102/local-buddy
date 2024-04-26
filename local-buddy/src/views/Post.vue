<template>
	<div class="post-page bg-feed">
		<!-- Modal Menu -->
		<div v-if="isMobile && isModalOpen" class="modal-container d-flex justify-content-center align-items-center">
			<div class="modal-menu col-sm-6 pb-3 px-2 rounded-4">
				<p class="pb-4 pt-2">
					<svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
						<path
							fill-rule="evenodd"
							d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
						/></svg
					><strong>Menu</strong>
				</p>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
						<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
						<path
							fill-rule="evenodd"
							d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
						/>
					</svg>
					{{ userPrefix }}
				</p>
				<hr />

				<p href="#" @click.prevent="goToBugReport" class="linking">Zgłoś problem</p>
				<p href="#" @click.prevent="goToRating" class="linking">Oceń nas</p>

				<p href="#" class="linking mt-5" @click.prevent="handleSignOut">Wyloguj</p>
				<hr />
				<p href="#" class="linking" @click.prevent="closeModal"><strong>Close</strong></p>
			</div>
		</div>
		<!-- MENU FOR MOBILES -->
		<div v-if="isMobile" class="custom-footer">
			<ul class="nav nav-tabs d-flex justify-content-around mx-5" role="tablist">
				<li class="nav-item">
					<a href="#" @click.prevent="goToFeed" class="nav-link px-2 text-body-secondary nav-link" role="tab"
						><!-- Home --><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
							<path
								d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"
							/>
							<path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" /></svg
					></a>
				</li>
				<li class="nav-item">
					<a @click.prevent="goToPost" href="#" class="nav-link px-2 text-body-secondary nav-link active" role="tab"
						><!-- post --><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
							<path
								d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"
							/></svg
					></a>
				</li>

				<li class="nav-item">
					<a href="#" @click.prevent="openModal" class="nav-link px-2 text-body-secondary nav-link" role="tab"
						><!-- More --><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
							/></svg
					></a>
				</li>
			</ul>
		</div>
		<section class="d-flex justify-content-center align-items-center">
			<div class="container my-5 pb-5">
				<div class="row pt-5 d-flex align-items-center justify-content-center">
					<!-- SIDEBAR FOR DESKTOPS -->
					<div
						v-if="isMobile === false"
						class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary fixed-left col-md-3 sidebar"
						style="background-color: #ef8172 !important"
					>
						<a class="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
							<img class="mx-4" src="../assets/images/logov2text.svg" style="height: 150px" />
						</a>
						<hr />
						<ul class="nav nav-pills flex-column mb-auto text-start">
							<li class="nav-item">
								<a href="#" @click.prevent="goToFeed" class="nav-link" aria-current="page">
									<svg xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
										<path
											d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"
										/>
										<path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
									</svg>
									Feed
								</a>
							</li>
							<li>
								<a href="#" @click.prevent="goToPost" class="nav-link link-body-emphasis active">
									<svg xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
										<path
											d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"
										/>
									</svg>
									Dodaj post
								</a>
							</li>

							<li>
								<a href="#" class="nav-link link-body-emphasis email-link">
									<svg xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
										<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
										<path
											fill-rule="evenodd"
											d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
										/>
									</svg>
									{{ userPrefix }}
								</a>
							</li>
						</ul>
						<hr />
						<div class="dropdown d-flex justify-content-center">
							<a
								class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
									<path
										fill-rule="evenodd"
										d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
									/>
								</svg>
								<strong>Więcej</strong>
							</a>
							<ul class="dropdown-menu text-small shadow" style="background-color: #d16e88">
								<li><a class="dropdown-item" @click.prevent="goToBugReport" href="#">Zgłoś problem</a></li>
								<li><a class="dropdown-item" @click.prevent="goToRating" href="#">Oceń nas</a></li>

								<li><hr class="dropdown-divider" /></li>
								<li><a class="dropdown-item" href="#" @click.prevent="handleSignOut">Wyloguj</a></li>
							</ul>
						</div>
					</div>

					<!-- MAIN CONTENT -->
					<div class="col-md-6">
						<div class="post-form-container">
							<h2>Dodaj nowy post</h2>
							<form @submit.prevent="submitPost" class="post-form">
								<!-- dodane żeby robić zdjęcia -->
								<div class="form-group d-flex flex-column align-items-center">
									<div class="d-flex align-items-center">
										<label for="image">Zdjęcie:</label>
										<input type="file" id="image" @change="handleImageChange" accept="image/*" style="display: none" />
									</div>
									<div class="photo-buttons">
										<!-- Przycisk dla wyboru zdjęcia z plików -->
										<label for="file-upload" class="custom-file-label photo-button">Wybierz Zdjęcie</label>
										<input id="file-upload" class="file-input" type="file" accept="image/*" @change="handleImageChange" />

										<!-- Przycisk dla zrobienia nowego zdjęcia -->
										<div class="photo-button" @click="takePhoto">Szybkie Zdjęcie</div>
									</div>
									<!-- Podgląd wybranego zdjęcia -->
									<div v-if="imagePreview" class="mt-2 preview-of-image">
										<img :src="imagePreview" alt="Podgląd Zdjęcia" style="max-width: 100%; max-height: 200px" />
									</div>
								</div>
								<!-- dodane żeby robić zdjęcia -->
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
									<div class="input-group custom-input-group">
										<input type="text" id="location" v-model="location" @input="searchSuggestions" class="form-control" />
										<div class="input-group-append">
											<button class="btn btn-custom" type="button" @click="getCurrentLocation">
												<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-geo-alt" viewBox="0 0 16 16">
													<path
														d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
													/>
													<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
												</svg>
											</button>
										</div>
									</div>
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
	</div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, getCurrentInstance, onMounted, inject, computed } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "@/firebaseConfig.js";
//import { firebaseConfig } from '@/../public/firebaseConfig.js';

export default {
	setup() {
		const db = getCurrentInstance().appContext.config.globalProperties.$db;
		const postsCollection = collection(db, "posts");
		const router = useRouter();
		const isMobile = ref(window.innerWidth <= 768);
		window.addEventListener("resize", () => {
			isMobile.value = window.innerWidth <= 768;
		});

		const isModalOpen = ref(false);
		const openModal = () => {
			isModalOpen.value = true;
		};
		const closeModal = () => {
			isModalOpen.value = false;
		};

		const userPrefix = computed(() => {
			return userEmail.value ? userEmail.value.split("@")[0] : "";
		});

		const image = ref(null);
		const imagePreview = ref(null);
		const description = ref("");
		const rating = ref(0);
		const location = ref("");
		const region = ref("");
		const suggestions = ref([]);
		const userEmail = inject("userEmail");

		const handleSignOut = inject("handleSignOut");
		const goToBugReport = inject("goToBugReport");
		const goToRating = inject("goToRating");

		onMounted(async () => {
			try {
				isMobile.value = window.innerWidth <= 768;
			} catch (error) {
				console.error("Błąd podczas pobierania danych:", error);
			}
			const script = document.createElement("script");
			script.src = `https://maps.googleapis.com/maps/api/js?key=${firebaseConfig.googleKey}&libraries=places`;
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);

			script.onload = () => {
				console.log("Google Maps API załadowany");
				initGoogleMaps();
			};
		});

		const getCurrentLocation = () => {
			if ("geolocation" in navigator) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
						const geocoder = new google.maps.Geocoder();
						geocoder.geocode({ location: latLng }, (results, status) => {
							if (status === google.maps.GeocoderStatus.OK && results[0]) {
								location.value = results[0].formatted_address;
								// Aktualizuj sugestie, jeśli potrzeba
								searchSuggestions();
							} else {
								console.error("Nie udało się znaleźć lokalizacji: ", status);
							}
						});
					},
					(error) => {
						console.error("Błąd podczas uzyskiwania lokalizacji: ", error);
					}
				);
			} else {
				console.error("Twoja przeglądarka nie obsługuje Geolocation API");
			}
		};

		const vibrate = () => {
			if ("vibrate" in navigator) {
				navigator.vibrate([500, 500, 500]);
				console.log("poszło");
			} else {
				alert("Vibration not supported");
			}
		};

		const searchSuggestions = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
						const service = new google.maps.places.AutocompleteService();
						const request = {
							input: location.value,
							location: latLng,
							radius: 10000, // Maksymalny zasięg w metrach od obecnej pozycji
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
				// Tutaj możesz wywołać funkcje Google Maps, np. geocodowanie
			} else {
				console.error("Google Maps API nie załadowany poprawnie");
			}
		};

		const selectImage = () => {
			const input = document.getElementById("image");
			input.click(); // Wywołujemy kliknięcie na input file, aby wybrać zdjęcie
		};

		const handleImageChange = (event) => {
			const file = event.target.files[0];
			if (file) {
				image.value = file;
				previewImage();
			}
		};

		const previewImage = () => {
			const reader = new FileReader();
			reader.onload = (e) => {
				imagePreview.value = e.target.result;
			};
			reader.readAsDataURL(image.value);
		};

		const takePhoto = () => {
			if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
				navigator.mediaDevices
					.getUserMedia({ video: true })
					.then((stream) => {
						const video = document.createElement("video");
						const mediaStream = new MediaStream(stream);
						video.srcObject = mediaStream;
						video.onloadedmetadata = () => {
							video.play();
							const canvas = document.createElement("canvas");
							canvas.width = video.videoWidth;
							canvas.height = video.videoHeight;
							const context = canvas.getContext("2d");
							context.drawImage(video, 0, 0, canvas.width, canvas.height);
							const imageDataURL = canvas.toDataURL("image/jpeg");
							const blob = dataURLToBlob(imageDataURL);
							processImage(blob);
							stream.getTracks().forEach((track) => track.stop());
						};
					})
					.catch((error) => {
						console.error("Błąd podczas dostępu do kamery:", error);
					});
			} else {
				console.error("Twoja przeglądarka nie obsługuje funkcji kamery");
			}
		};

		const processImage = (blob) => {
			// get a timestamp
			const timestamp = Date.now();
			// create a File object from the blob
			const file = new File([blob], `photo_${timestamp}.jpeg`, { type: "image/jpeg" });

			// overwrite the image.value with the file
			image.value = file;

			// update the image preview
			previewImage();
		};

		const dataURLToBlob = (dataURL) => {
			const byteString = atob(dataURL.split(",")[1]);
			const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
			const arrayBuffer = new ArrayBuffer(byteString.length);
			const uint8Array = new Uint8Array(arrayBuffer);
			for (let i = 0; i < byteString.length; i++) {
				uint8Array[i] = byteString.charCodeAt(i);
			}
			return new Blob([uint8Array], { type: mimeString });
		};
		const goToFeed = () => {
			router.push("/feed");
		};

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
					userEmail: userEmail.value,
				});
				image.value = null;
				description.value = "";
				rating.value = 1;
				location.value = "";
				region.value = "";
				console.log("Post został dodany pomyślnie!");
				vibrate();
				goToFeed();
			} catch (error) {
				console.error("Błąd podczas dodawania postu: ", error);
				alert("Błąd przy dodawaniu sprawdz konsole");
			}
		};

		return {
			image,
			description,
			rating,
			location,
			region,
			imagePreview,
			selectImage,
			handleImageChange,
			previewImage,
			takePhoto,
			processImage,
			dataURLToBlob,
			submitPost,
			isMobile,
			goToFeed,
			suggestions,
			getCurrentLocation,
			vibrate,
			searchSuggestions,
			selectSuggestion,
			suggestions,
			userEmail,
			initGoogleMaps,
			userPrefix,
			isModalOpen,
			openModal,
			closeModal,
			goToBugReport,
			goToRating,
			handleSignOut,
		};
	},
};
</script>

<style scoped>
.preview-of-image {
	border: 1px solid #000000;
}
.post-form-container {
	max-width: 600px;
	/* margin: 0 auto; */
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

.btn-custom {
	background-color: white;
	border: 1px solid #ced4da;
	border-radius: 4px;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 24px; /* Zwiększamy padding dla większego przycisku */
	font-size: 18px; /* Zwiększamy rozmiar tekstu */
	width: auto;
	height: auto;
}

.btn-custom svg {
	width: 1.2em; /* Zwiększamy rozmiar ikony */
	height: 1.2em; /* Zwiększamy rozmiar ikony */
	margin-right: 5px;
	fill: black;
	vertical-align: middle;
}

/* dodane żeby robić zdjęcia */
/* Przyciski do wyboru/zrobienia zdjęcia */
.photo-buttons {
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
}

.photo-button {
	padding: 10px 20px;
	border-radius: 4px;
	border: 1px solid #ced4da;
	background-color: #f9f9f9;
	color: #333;
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;
}

.photo-button:hover {
	background-color: #e9ecef;
	color: #333;
}

/* Ukrywanie inputa file */
.file-input {
	display: none;
}
/* dodane żeby robić zdjęcia */

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
