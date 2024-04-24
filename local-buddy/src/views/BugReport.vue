<template>
    <div>
        <h2>Zgłoś błąd</h2>
        <form @submit.prevent="submitError" class="bugReport-form">
            <!-- Pole do wpisania błędu -->
            <label for="bugReport">Opisz błąd:</label>
            <textarea id="bugReport" v-model="bugReportDescription"></textarea>
            <!-- Przycisk do wysłania formularza -->
            <button type="submit">Zgłoś</button>
        </form>
    </div>
</template>
<script>
import { collection, addDoc } from 'firebase/firestore';
import { ref, getCurrentInstance} from "vue";
export default {
    setup(){
        const db = getCurrentInstance().appContext.config.globalProperties.$db;
        const bugReportCollection = collection(db, 'bugReport');
    
        const bugReportDescription = ref('');
        const submitError = async () => {
            try {
                await addDoc(bugReportCollection, {
                    description: bugReportDescription.value
                });
                // Wyczyszczenie formularza po zapisaniu danych
                bugReportDescription.value = '';
                console.log('Błąd został zgłoszony pomyślnie.');}
            catch (error) {
                console.error('Błąd podczas zgłaszania błędu:', error);
            }
        };
        
        return {
            bugReportDescription,
            submitError
        };
        
    }
}
</script>
<style scoped>
    .bugReport-form {
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
    textarea {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 20px;
    }
    button {
        width: 100%;
        padding: 10px 20px;
        background-color: #dc3545; /* Kolor czerwony */
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #c82333; /* Ciemniejszy odcień czerwonego */
    }
</style>