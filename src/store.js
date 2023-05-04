import {reactive} from 'vue';

export const store = reactive({
  
  myTitle : 'prova store',
  apiUrl : 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  charactersList:[],
  counter: 0, 
  isLoading : true,
  next:null,
  prev:null,
  numb:140,
})