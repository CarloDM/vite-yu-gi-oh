<script>
import axios from 'axios';
import {store} from './store';
import Header from './components/header.vue';
import Main from './components/main.vue';

export default {
  name: 'app',
  components: {
    Header,
    Main,
  },

  methods:{
    
    getApi(){
      axios.get(store.apiUrl)
      .then(result => {
        console.log('api', result.data.data.slice(0,15))
        store.charactersList = result.data.data.slice(0,15)
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

  <Main />

</template>


<style lang="scss">
@import './scss/main.scss';

</style>