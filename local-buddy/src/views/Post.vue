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
        <div class="input-group custom-input-group">
          <input type="text" id="location" v-model="location" @input="searchSuggestions" class="form-control" />
          <div class="input-group-append">
            <button class="btn btn-custom" type="button" @click="getCurrentLocation">
              <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ul class="autosuggest-list" v-if="suggestions.length > 0">
        <li v-for="suggest in suggestions" :key="suggest.place_id" @click="selectSuggestion(suggest)">{{ suggest.description }}</li>
      </ul>


      <button @Click="vibrate()" type="submit">Dodaj post</button>
    </form>
  </div>
</template>

<script>
import { firebaseConfig } from '@/../public/firebaseConfig.js';

export default {
  data() {
    return {
      image: null,
      description: '',
      rating: 1,
      location: '',
      suggestions: []
    };
  },
  mounted() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${firebaseConfig.googleKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

  script.onload = () => {
    console.log('Google Maps API załadowany');
    this.initGoogleMaps();
  };
  },
  methods: {
    getCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latLng = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location: latLng }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results[0]) {
              this.location = results[0].formatted_address;
              // Aktualizuj sugestie, jeśli potrzeba
              this.searchSuggestions();
            } else {
              console.error("Nie udało się znaleźć lokalizacji: ", status);
            }
          });
        },
        error => {
          console.error("Błąd podczas uzyskiwania lokalizacji: ", error);
        }
      );
    } else {
      console.error("Twoja przeglądarka nie obsługuje Geolocation API");
    }
  },
    vibrate() {
      if ("vibrate" in navigator) {
        navigator.vibrate([100, 100, 100, 100, 100, 100, 500, 100, 500, 100, 500, 100, 100, 100, 100, 100, 100]);
        console.log('poszło');
      } else {
        alert("Vibration not supported");
      }
    },
    searchSuggestions() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
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
      }, error => {
        console.error('Błąd podczas uzyskiwania lokalizacji:', error);
      });
    } else {
      console.error('Twoja przeglądarka nie obsługuje Geolocation API');
    }
  },
  selectSuggestion(suggestion) {
    this.location = suggestion.description;
    this.suggestions = [];
  },
    initGoogleMaps() {
    if (typeof google !== 'undefined' && google.maps) {
      console.log('Inicjalizacja Google Maps');
      // Tutaj możesz wywołać funkcje Google Maps, np. geocodowanie
    } else {
      console.error('Google Maps API nie załadowany poprawnie');
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
        location: this.location
      });
      
      // reset pul w formularzu po dodaniu posta
      this.image = null;
      this.description = '';
      this.rating = 1;
      this.location = '';
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
