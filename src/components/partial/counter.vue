<script>
export default {
  name: 'counter',
  props: {
    // count,
  }

}
</script>

<template>
<div class="counter debug">
  <p>count:</p>

</div>

  
</template>

<style lang="scss" scoped>

.counter{
  width: 100%;
  height: 50px;
  margin-bottom: 2px;
  background-color: rgb(58, 55, 55);

  p {
    color: white;
    font-weight: 900;
  }
}

</style>