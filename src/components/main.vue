
<script>
import Counter from './partial/counter.vue'
import Card from './card.vue';
import searchB from './searchbar.vue';
import {store} from '../store';
export default {
  name:'Main',
  components:{
    Card,
    Counter,
    searchB,
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
      <div class="card-container">

        <Counter/>

        <Card class="card"
        v-for="(card,index) in store.charactersList" :key="index"
        :img="card.card_images[0].image_url_small"
        :name="card.name"
        :type="card.type"
        :archetype="card.archetype"
        />
        
      </div>

    </div>

  </main>

</template>


<style lang="scss" scoped>
@use '../scss/variables.scss' as *;

main{
  background-color: $primary-color;
  width: 100%;
  min-height: 100vh;
  display: flex;
  // justify-content: center;
  padding-bottom: 20px;

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 90%;
    margin: 50px auto;
    padding: 10px;
    border-radius: 5px;

    .card-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: flex-start;
      width: 100%;
    }
  }
}





</style>