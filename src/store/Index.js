import Vue from 'vue';
import Vuex from 'vuex';
import products from '../Mock/products.json';

Vue.use(Vuex);

export default new Vuex.Store({
        state: {
            products:[],
            cart:[]
        },
        getters: {
            products: state => state.products,
            cart: state => state.cart
        },
        actions: {
            getProducts({ commit }){
                commit("getProductData");
            }
        },
        mutations: {
            getProductData(state){
                state.products = products;
            }
        },

})