<template>
<div class ="row">
    <div class="card" style="width: 14rem;" 
    v-for="item in products" :key="item.id">
  <img :src="item.imgUrl" class="card-img-top" alt:="item.title">
  <div class="card-body">
    <p class="card-title">{{item.title}}</p>
    <p class="card-text">{{item.price}}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
</div>
</template>
<script>
import products from '../Mock/products.json'
export default{
    name:"ProductsList",
    data(){
        return{
            products
        }
    }
};
</script>
<style scoped>
.card{
    border: none;
}
</style>