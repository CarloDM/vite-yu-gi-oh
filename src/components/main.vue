
<script>
import Card from './card.vue';
import {store} from '../store';
export default {
  name:'Main',
  components:{
    Card,
  },
  data(){
    return {
      store,
    }
  }
}
</script>

<template>
  <main class="">
    <div class="container">
      <div class="card-container debug">

        <Card class="card"
        v-for="(card,index) in store.charactersList"/>
        
      </div>

    </div>

  </main>

</template>


<style lang="scss" scoped>
@use '../scss/variables.scss' as *;

main{
  background-color: $primary-color;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 80%;
    height: 80%;
    margin-top: 80px;

    .card-container{
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      width: 90%;
      height: 90%;
    }
  }
}





</style>