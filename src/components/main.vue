
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
      <div class="card-container">

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
  display: flex;
  justify-content: center;
  padding-bottom: 50px;

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 85%;
    margin-top: 80px;
    padding: 30px;

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