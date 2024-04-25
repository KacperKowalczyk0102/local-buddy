<script setup>
import { ref, onMounted, provide } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";
const isLoggedIn = ref(false);

let auth;
let userEmail = ref(null);
onMounted(() => {
	auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			isLoggedIn.value = true;
			userEmail.value = user.email;
		} else {
			isLoggedIn.value = false;
			userEmail.value = null;
		}
	});
});

const handleSignOut = () => {
	signOut(auth).then(() => {
		router.push("/");
	});
};
const goToHome = () => {
	router.push("/");
};
const goToBugReport = () => {
	router.push("/bug-report");
};
const goToRating = () => {
	router.push("/rating");
};
const goBack = () => {
	router.go(-1);
};
const goToFeed = () => {
	router.push("/feed");
};

provide("handleSignOut", handleSignOut);
provide("userEmail", userEmail);
provide("goToHome", goToHome);
provide("goToBugReport", goToBugReport);
provide("goToRating", goToRating);
provide("goBack", goBack);
provide("goToFeed", goToFeed);
</script>

<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/feed">Feed</router-link>
			<router-link to="/register">Register</router-link>
			<router-link to="/signin">Sign In</router-link>
			<router-link to="/post">Post</router-link>
			<router-link to="/rating">Rating</router-link>
			<router-link to="/bug-report">Bug Report</router-link>
			<button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
		</nav>
		<router-view />
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

#app {
	/* font-family: Avenir, Helvetica, Arial, sans-serif; */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
