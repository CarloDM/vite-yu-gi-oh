<script>
export default {

}
</script>

<template>
  <div class="container">
    <input type="text" value=""> 
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables.scss' as *;
.container{
  text-align: center;
  background-color: $primary-color;
  padding-top: 50px;

  input{
    margin: 0px auto;
    width: 30%;
  }
}

</style>