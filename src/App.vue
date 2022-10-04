<template>
  <div id="app">
    <Navbar/>
  <div class="container">
    <div class="row">
      <div class="col-8"><ProductsList/></div>
      <div class="col-4"><Cart/></div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    ProductsList,
    Cart,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
