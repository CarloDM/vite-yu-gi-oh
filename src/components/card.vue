<script>
export default {
  name:'card',
  props: {
    img: String,
    name: String,
    type: string,
    archetype: String,
  }
}
</script>

<template>
  <div class="card">
    <img :src="img" :alt="name" class="debug">
    <h3 class="name">{{ name }} </h3>
    <span class="type">{{ type }} </span>
  </div>
  
</template>


<style lang="scss" scoped>
@use '../scss/variables.scss' as *;
  .card{
    width: calc(90% / 5);
    text-align: center;
    background-color: $primary-color;
    margin-bottom: 10px;
    img{
      width: 100%;
    }

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

</style>