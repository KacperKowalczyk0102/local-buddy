<template>
	<div class="container">
		<div class="row d-flex align-items-center justify-content-center">
			<!-- SIDEBAR FOR DESKTOPS -->
			<div v-if="isMobile === false" class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary fixed-left col-md-3 sidebar">
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
				<!-- test -->
				<div class="col-md-6">
					<ul>
						<li v-for="post in posts" :key="post.id">{{ post.description }} - {{ post.location }} {{ post.createdAt }} - {{ post.rating }}</li>
					</ul>
				</div>
				Feed TEST TEST TESTTEST TESTTEST TEST TEST TEST Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida nisi at est maximus,
				sed cursus nulla lobortis. Donec a vulputate dolor. Vivamus tortor massa, semper quis congue varius, efficitur sed ex. Mauris aliquet lacinia
				arcu, et tincidunt nisi malesuada vitae. Etiam dapibus erat sapien. Suspendisse vel vehicula tortor, faucibus laoreet quam. Quisque cursus,
				mauris eu malesuada tristique, arcu urna tincidunt sapien, in porttitor magna urna at magna. Class aptent taciti sociosqu ad litora torquent
				per conubia nostra, per inceptos himenaeos. Duis ultrices finibus luctus. Nunc a sollicitudin ligula. Etiam auctor porta dui, eget fringilla
				magna maximus vel. Curabitur vel mi sit amet ipsum luctus bibendum. Quisque sed enim ut metus cursus pulvinar tempus gravida erat. Nullam
				porttitor, urna quis vehicula fringilla, urna velit pulvinar ipsum, nec ultricies eros nunc vel odio. Sed lobortis lorem eu leo semper
				vulputate. Donec sed metus ac ligula facilisis dignissim sit amet sit amet tellus. Fusce eleifend turpis ligula, nec hendrerit magna placerat
				at. Aliquam finibus quis justo vel sodales. Curabitur nec arcu sit amet purus consectetur consectetur vitae ac est. Nunc egestas aliquet
				varius. Integer molestie pellentesque laoreet. Nulla malesuada nisl sit amet neque semper, ultrices dapibus ante auctor. Cras vitae suscipit
				sem. Vivamus non turpis luctus, sagittis nisl eu, luctus massa. Phasellus ornare elit et nulla pellentesque, nec auctor nunc congue. Ut
				interdum vehicula aliquet. Donec sollicitudin mi sed vulputate interdum. Nulla ut blandit diam. Vivamus scelerisque in turpis at pretium.
				Fusce at viverra diam. Sed orci metus, facilisis et mi in, ultricies scelerisque massa. Vestibulum eu fringilla ante, quis pellentesque nulla.
				Maecenas a arcu accumsan, finibus mauris quis, facilisis dolor. Curabitur suscipit egestas elit tincidunt elementum. Donec felis magna,
				dignissim eu sodales quis, cursus auctor enim. Aenean ut tristique arcu. Fusce in nisl consequat, lobortis turpis vel, ornare libero. Maecenas
				iaculis quam neque, ut lobortis diam tristique in. Nulla facilisi. Suspendisse varius sapien at sodales ultrices. Phasellus suscipit feugiat
				nunc id lacinia. Maecenas finibus nibh nisi, tempor blandit tellus pulvinar in. Donec at nunc id odio efficitur finibus nec at est. Maecenas
				vitae turpis tincidunt, luctus tortor id, tincidunt ipsum. Aliquam sapien purus, consequat nec interdum facilisis, euismod blandit augue.
				Proin porta non sapien at porttitor. Donec ac mi ut purus feugiat varius et gravida dui. Nam augue nulla, efficitur a lacus vel, rhoncus
				congue tortor. Donec commodo eleifend enim, ac lacinia diam tempus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
				gravida nisi at est maximus, sed cursus nulla lobortis. Donec a vulputate dolor. Vivamus tortor massa, semper quis congue varius, efficitur
				sed ex. Mauris aliquet lacinia arcu, et tincidunt nisi malesuada vitae. Etiam dapibus erat sapien. Suspendisse vel vehicula tortor, faucibus
				laoreet quam. Quisque cursus, mauris eu malesuada tristique, arcu urna tincidunt sapien, in porttitor magna urna at magna. Class aptent taciti
				sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultrices finibus luctus. Nunc a sollicitudin ligula. Etiam auctor
				porta dui, eget fringilla magna maximus vel. Curabitur vel mi sit amet ipsum luctus bibendum. Quisque sed enim ut metus cursus pulvinar tempus
				gravida erat. Nullam porttitor, urna quis vehicula fringilla, urna velit pulvinar ipsum, nec ultricies eros nunc vel odio. Sed lobortis lorem
				eu leo semper vulputate. Donec sed metus ac ligula facilisis dignissim sit amet sit amet tellus. Fusce eleifend turpis ligula, nec hendrerit
				magna placerat at. Aliquam finibus quis justo vel sodales. Curabitur nec arcu sit amet purus consectetur consectetur vitae ac est. Nunc
				egestas aliquet varius. Integer molestie pellentesque laoreet. Nulla malesuada nisl sit amet neque semper, ultrices dapibus ante auctor. Cras
				vitae suscipit sem. Vivamus non turpis luctus, sagittis nisl eu, luctus massa. Phasellus ornare elit et nulla pellentesque, nec auctor nunc
				congue. Ut interdum vehicula aliquet. Donec sollicitudin mi sed vulputate interdum. Nulla ut blandit diam. Vivamus scelerisque in turpis at
				pretium. Fusce at viverra diam. Sed orci metus, facilisis et mi in, ultricies scelerisque massa. Vestibulum eu fringilla ante, quis
				pellentesque nulla. Maecenas a arcu accumsan, finibus mauris quis, facilisis dolor. Curabitur suscipit egestas elit tincidunt elementum. Donec
				felis magna, dignissim eu sodales quis, cursus auctor enim. Aenean ut tristique arcu. Fusce in nisl consequat, lobortis turpis vel, ornare
				libero. Maecenas iaculis quam neque, ut lobortis diam tristique in. Nulla facilisi. Suspendisse varius sapien at sodales ultrices. Phasellus
				suscipit feugiat nunc id lacinia. Maecenas finibus nibh nisi, tempor blandit tellus pulvinar in. Donec at nunc id odio efficitur finibus nec
				at est. Maecenas vitae turpis tincidunt, luctus tortor id, tincidunt ipsum. Aliquam sapien purus, consequat nec interdum facilisis, euismod
				blandit augue. Proin porta non sapien at porttitor. Donec ac mi ut purus feugiat varius et gravida dui. Nam augue nulla, efficitur a lacus
				vel, rhoncus congue tortor. Donec commodo eleifend enim, ac lacinia diam tempus congue.
			</div>
		</div>
		<!-- FOOTER FOR MOBILES -->
		<footer v-if="isMobile" class="fixed-bottom" style="background-color: red">
			<ul class="nav nav-tabs justify-content-between py-1 mx-5" role="tablist">
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
					<a href="#" class="nav-link px-2 text-body-secondary nav-link" role="tab"
						><!-- Notification --><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
							<path
								d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"
							/></svg
					></a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link px-2 text-body-secondary nav-link" role="tab"
						><!-- Profile --><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
							<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
							<path
								fill-rule="evenodd"
								d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
							/></svg
					></a>
				</li>

			</ul>
		  </div>
		</div>
		<!-- MAIN CONTENT -->
		<div class="col-md-6">
		  <ul>
			<li v-for="post in posts" :key="post.id">
			  {{ post.description }} - {{ post.location }}
			  {{ post.createdAt }} - {{ post.rating }}
			</li>
		  </ul>
		</div>
	  </div>
	  <!-- FOOTER FOR MOBILES -->
	  <footer v-if="isMobile" class="fixed-bottom" style="background-color: red">
		<ul class="nav nav-tabs justify-content-between py-1 mx-5" role="tablist">
		  <li class="nav-item">
			<a href="#" @click.prevent="goToFeed" class="nav-link px-2 text-body-secondary nav-link active" role="tab"
			  ><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
				<path
				  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"
				/>
				<path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" /></svg
			></a>
		  </li>
		  <li class="nav-item">
			<a @click.prevent="goToPost" href="#" class="nav-link px-2 text-body-secondary nav-link" role="tab"
			  ><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
				<path
				  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"
				/></svg
			></a>
		  </li>
		  <li class="nav-item">
			<a href="#" class="nav-link px-2 text-body-secondary nav-link" role="tab"
			  ><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
				<path
				  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"
				/></svg
			></a>
		  </li>
		  <li class="nav-item">
			<a href="#" class="nav-link px-2 text-body-secondary nav-link" role="tab"
			  ><svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
				<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
				<path
				  fill-rule="evenodd"
				  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
				/></svg
			></a>
		  </li>
		</ul>
	  </footer>
	</div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted, getCurrentInstance } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
export default {
	setup() {
		const router = useRouter();
		const isMobile = ref(window.innerWidth <= 768);
		const { proxy } = getCurrentInstance();
		const db = proxy.$db;
		// Lista postów
		const posts = ref([]);

		window.addEventListener("resize", () => {
			isMobile.value = window.innerWidth <= 768;
		});

		/* onMounted(() => {
			const db = this.$db;
			isMobile.value = window.innerWidth <= 768;
		}); */
		onMounted(async () => {
			try {
				isMobile.value = window.innerWidth <= 768;
				const querySnapshot = await getDocs(collection(db, "posts"));
				querySnapshot.forEach((doc) => {
					posts.value.push({ id: doc.id, ...doc.data() });
				});
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

		return { goToFeed, goToPost, isMobile, posts };
	},
  };
  </script>
  
  <style>
  /* Opcjonalne style CSS */
  </style>
  