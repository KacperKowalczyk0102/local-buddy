<template>
    <div>
        <h2>Ocena aplikacji</h2>
        <form @submit.prevent="submitRating" class="rating-form">
            <label for="rating">Ocena:</label>
            <select id="rating" v-model.number="selectedRating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <!-- Pole do wpisania komentarza -->
            <label for="comment">Komentarz:</label>
            <textarea id="comment" v-model="comment"></textarea>
            <!-- Przycisk do wysłania formularza -->
            <button type="submit">Wyślij</button>
        </form>
    </div>
</template>
<script>
import { collection, addDoc } from 'firebase/firestore';
import { ref, getCurrentInstance} from "vue";
export default {
    setup(){
        const db = getCurrentInstance().appContext.config.globalProperties.$db;
        const ratingCollection = collection(db, 'ratings');
    
        const selectedRating = ref('');
        const comment = ref('');
        const submitRating = async () => {
            try {
                await addDoc(ratingCollection, {
                    rating: selectedRating.value,
                    comment: comment.value
                });
                // Wyczyszczenie formularza po zapisaniu danych
                selectedRating.value = '';
                comment.value = '';
                console.log('Dane zostały zapisane w bazie danych Firebase.');}
            catch (error) {
                console.error('Błąd podczas zapisywania danych:', error);
            }
        };
        
        return {
            selectedRating,
            comment,
            submitRating
        };
        
    }
}
</script>
<style scoped>
    .form-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
    }
    label {
        display: block;
        margin-top: 20px;
    }
    select, textarea {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 20px;
    }
    button {
        width: 100%;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>
