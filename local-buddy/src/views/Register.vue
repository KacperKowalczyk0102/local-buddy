<template>
  <h1>Załóż konto</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Hasło" v-model="password" /></p>
  <p><button @click="register">Zarejestruj</button></p>
  <p><button @click="signInWithGoogle">Zarejestruj z google</button></p>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Zarejestrowano pomyślnie")
      console.log(auth.currentUser)
      router.push('/feed');
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
 const provider = new GoogleAuthProvider();
 signInWithPopup(getAuth(), provider)
    .then((result) => {
     console.log(result.user);
      router.push('/feed');
    }).catch((error) => {

    });
};
</script>

<style>
/* Opcjonalne style CSS */
</style>
