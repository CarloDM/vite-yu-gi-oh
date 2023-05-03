<script>
export default {
  name:'card',
  props: {
    img: String,
    name: String,
    type: String,
    archetype: String,
  }
}
</script>

<template>
  <div class="card">
    <img :src="img" :alt="name" class="debug">
    <div class="">
      <h3 class="name">{{ name }} </h3>
      <span class="type">{{ type }} </span>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>
@use '../scss/variables.scss' as *;
  .card{
    display: flex;
    flex-direction: column;
    width: calc(90% / 4);
    text-align: center;
    background-color: $primary-color;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 0 7px rgba(124, 124, 124, 0.445);
    overflow: hidden;
    img{
      width: 100%;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 6rem;
      
      h3{
        font-size: 0.8rem;
        padding: 5px;
        color: white;
      }
      span{
        display: block;
        font-size: 0.7rem;
        padding: 10px;
      }
    }

  }

</style>