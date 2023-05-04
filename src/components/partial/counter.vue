<script>
import {store} from '../../store.js';
export default {
  name: 'counter',
  props: {
    // count,
  },

  data(){
    return{
      store,
    }
  }

}
</script>

<template>
<div class="counter debug">
  <p>count:{{ store.counter }}</p>
  <span v-if="store.isLoading">is loading</span>

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
  span{
    color:red
  }
}

</style>