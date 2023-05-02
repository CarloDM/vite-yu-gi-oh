import {reactive} from 'vue';

export const store = reactive({
  
  myTitle : 'prova store',
  apiUrl : 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  charactersList:[],
})