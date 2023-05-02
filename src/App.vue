<script>
import Header from './components/header.vue';
import Main from './components/main.vue';
export default {
  name: 'app',
  components: {
    Header,
    Main,
  }
}
</script>

<template>
  <Header />

  <Main />

</template>


<style lang="scss">
@import './scss/main.scss';

</style>