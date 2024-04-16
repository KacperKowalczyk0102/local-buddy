<template>
  <h1>Zaloguj się</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Hasło" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="logIn">Zaloguj się</button></p>
  <p><button @click="logInWithGoogle">Zaloguj się z google</button></p>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errMsg = ref('');// ERROR MESSAGE
const router = useRouter();

const logIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Zarejestrowano pomyślnie")
      console.log(auth.currentUser)
      router.push('/feed');
    })
    .catch((error) => {
      console.log(error.code);
      switch(error.code){
        case 'auth/invalid-email':
          errMsg.value = 'Niepoprawny email';
          break;
        case 'auth/user-not-found':
          errMsg.value = 'Użytkownik nie istnieje';
          break;
        case 'auth/wrong-password':
          errMsg.value = 'Niepoprawne hasło';
          break;
        default:
          errMsg.value = 'Email bądź hasło są niepoprawne';
          break;
      }
    });
};

const logInWithGoogle = () => {
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
