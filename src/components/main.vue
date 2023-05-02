
<script>
import Card from './card.vue'
export default {
  name:'Main',
  components:{
    Card,
  }
}
</script>

<template>
  <main class="">
    <div class="container">
      <div class="card-container debug">
        <Card class="card"/>
        <Card class="card"/>
        <Card class="card"/>
        <Card class="card"/>
        <Card class="card"/>
        <Card class="card"/>
        <Card class="card"/>
        <Card class="card"/>
        <Card class="card"/>
        
      </div>

    </div>

  </main>

</template>


<style lang="scss" scoped>

main{
  background-color: rgb(212, 143, 56);
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
      width: 90%;
      height: 90%;
    }
  }
}





</style>