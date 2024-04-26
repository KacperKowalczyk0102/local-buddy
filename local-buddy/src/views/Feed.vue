<template>
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
				<a href="#" @click.prevent="goToFeed" class="nav-link px-2 text-body-secondary nav-link active" role="tab"
					><!-- Home --><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
						<path
							d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"
						/>
						<path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" /></svg
				></a>
			</li>
			<li class="nav-item">
				<a @click.prevent="goToPost" href="#" class="nav-link px-2 text-body-secondary nav-link" role="tab"
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
	<section class="bg-feed" style="min-height: 100vh">
		<div class="container">
			<div class="row d-flex align-items-center justify-content-center">
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
							<a href="#" @click.prevent="goToFeed" class="nav-link active" aria-current="page">
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
							<a href="#" @click.prevent="goToPost" class="nav-link link-body-emphasis">
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
				<!-- TOP NAVBAR -->
				<nav class="nav-feed sticky-top navbar px-0 mx-0 pb-3 col-md-7 col-sm-12">
					<div class="container-fluid d-flex justify-content-center align-items-center">
						<form>
							<div class="form-group pt-3 feed-group">
								<span>Wybierz region: </span>
								<select v-model="selectedRegion" @change="onRegionChange">
									<option value="">Wszystkie regiony</option>
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
								<!-- <button @click.prevent="clearRegion">clear</button> -->
							</div>
						</form>
					</div>
				</nav>
				<div class="col-md-6 mt-5 py-5">
					<!-- CARD / POST -->
					<div class="card my-5" style="width: 100%" v-for="post in posts" :key="post.id">
						<div class="card-header text-left">
							<h5 class="card-title">
								<svg xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
									<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
									<path
										fill-rule="evenodd"
										d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
									/>
								</svg>
								{{ post.userEmail.split("@")[0] }}
							</h5>
							<span></span><small>Adres: {{ post.location }}</small
							><br /><small>{{ post.region.toUpperCase() }}</small>
						</div>

						<img v-if="post.imageUrl" :src="post.imageUrl" alt="Post Image" style="max-width: 100%; height: auto" />
						<div class="card-body">
							Ocena:{{ stars(post.rating) }}<br />
							<small>{{ post.createdAt ? formatDate(post.createdAt) : "" }}</small
							><br />
							<!-- Opis posta -->
							<p v-if="post.showFullDescription || post.description.length <= 100">{{ post.description }}</p>
							<p v-else>{{ post.description.substring(0, 100) }}...</p>
							<!-- Przycisk Show More/Less -->
							<button class="btn btn-sm btn-post" v-if="post.description.length > 100" @click="post.showFullDescription = !post.showFullDescription">
								{{ post.showFullDescription ? "Pokaż mniej" : "Cały opis" }}
							</button>
						</div>
					</div>
					<!-- END -->
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted, getCurrentInstance, inject, computed, reactive } from "vue";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { format } from "date-fns";

export default {
	props: {
		post: Object,
	},
	setup() {
		const router = useRouter();
		const isMobile = ref(window.innerWidth <= 768);
		const { proxy } = getCurrentInstance();
		const db = proxy.$db;

		const isModalOpen = ref(false);
		const showFullDescription = ref(false);
		// Lista postów
		const posts = ref([]);

		const selectedRegion = ref(""); // Wybrany region

		window.addEventListener("resize", () => {
			isMobile.value = window.innerWidth <= 768;
		});
		const onRegionChange = async () => {
			try {
				posts.value = []; // Wyczyść listę postów przed pobraniem nowych danych
				let postCollection = collection(db, "posts");
				console.log(selectedRegion.value);
				// Jeżeli wybrano region, dodajemy warunek do zapytania
				if (selectedRegion.value) {
					postCollection = query(postCollection, where("region", "==", selectedRegion.value));
				}

				const querySnapshot = await getDocs(postCollection);
				querySnapshot.forEach((doc) => {
					posts.value.push({ id: doc.id, ...doc.data() });
				});
			} catch (error) {
				console.error("Błąd podczas pobierania danych:", error);
			}
		};
		onMounted(async () => {
			try {
				isMobile.value = window.innerWidth <= 768;
				/* let postCollection = collection(db, "posts");

				// Jeżeli wybrano region, dodajemy warunek do zapytania
				if (selectedRegion.value) {
					postCollection = query(postCollection, where("region", "==", selectedRegion.value));
					console.log(selectedRegion.value);
				}
				const querySnapshot = await getDocs(postCollection);
				querySnapshot.forEach((doc) => {
					posts.value.push({ id: doc.id, ...doc.data() });
				}); */
				await onRegionChange();
			} catch (error) {
				console.error("Błąd podczas pobierania danych:", error);
			}
		});

		const goToFeed = () => {
			router.push("/feed");
		};
		const goToPost = () => {
			router.push("/post");
		};
		const openModal = () => {
			isModalOpen.value = true;
		};
		const closeModal = () => {
			isModalOpen.value = false;
		};

		const formatDate = (timestamp) => {
			if (!timestamp) return "";
			try {
				const date = timestamp.toDate();
				return format(date, "dd-MM-yyyy : HH:mm");
			} catch (e) {
				console.error(e);
				return "";
			}
		};

		const toggleDescription = () => {
			showFullDescription.value = !showFullDescription.value;
		};

		const handleSignOut = inject("handleSignOut");
		const goToBugReport = inject("goToBugReport");
		const goToRating = inject("goToRating");
		const userEmail = inject("userEmail");
		const userPrefix = computed(() => {
			return userEmail.value ? userEmail.value.split("@")[0] : "";
		});

		const stars = (rating) => {
			return "⭐".repeat(rating);
		};
		const clearRegion = () => {
			selectedRegion.value = "";
		};

		return {
			goToFeed,
			goToPost,
			isMobile,
			posts,
			handleSignOut,
			userPrefix,
			openModal,
			closeModal,
			isModalOpen,
			goToBugReport,
			goToRating,
			formatDate,
			showFullDescription,
			toggleDescription,
			stars,
			selectedRegion,
			onRegionChange,
			clearRegion,
		};
	},
};
</script>

<style></style>
