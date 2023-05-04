<script>
import axios from 'axios';
import {store} from './store';
import Header from './components/header.vue';
import SearchB from './components/searchbar.vue';
import Main from './components/main.vue';

export default {
  name: 'app',
  components: {
    Header,
    Main,
    SearchB,
  },

  methods:{
    
    getApi(){
      axios.get(store.apiUrl)
      .then(result => {
        store.isLoading = true;
        console.log('api', result.data.data.slice(0,15))
        store.charactersList = result.data.data.slice(store.numb,182)
        store.isLoading = false;
        // store.next = 

      })
    }
  },

  mounted(){
    this.getApi()
  },
}
</script>

<template>

  <Header />
  <SearchB/>
  <Main />

</template>


<style lang="scss">
@import './scss/main.scss';

</style>