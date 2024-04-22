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
      <ul class="autosuggest-list" v-if="suggestions.length > 0">
        <li v-for="suggest in suggestions" :key="suggest.place_id" @click="selectSuggestion(suggest)">{{ suggest.description }}</li>
      </ul>
      <button type="submit">Dodaj post</button>
    </form>
  </div>
</template>

<script>

import { firebaseConfig } from "@/firebaseConfig"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


export default {
  data() {
    return {
      image: null,

      description: "",
      rating: 1,
      location: ""
    };
  },
  methods: {
    handleImageChange(event) {
      this.image = event.target.files[0];
    },
    async submitPost() {
      try {
        // inicializacja Firebase
        const firebaseApp = initializeApp(firebaseConfig);
        // daje dostęp do bazy danych
        const firestore = getFirestore(firebaseApp);
        // dajemy nazwę kolekcji, do której chcemy dodać posta
        const postsCollection = collection(firestore, "posts");
        
        // dodanie posta do bazy danych
        await addDoc(postsCollection, {
          description: this.description,
          rating: this.rating,
          location: this.location,
          createdAt: new Date().toISOString() // dodanie pola z obecną datą
        });

        // reset po dodaniu posta
        this.image = null;
        this.description = "";
        this.rating = 1;
        this.location = "";

        console.log("Post został dodany pomyślnie!");
      } catch (error) {
        console.error("Błąd podczas dodawania posta:", error);
      }
    }
  }
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
