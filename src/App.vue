<template>
  <div>
    <h1>🛒 Vuex Cart App</h1>
    <ProductList />
    <CartVue />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import CartVue from './components/CartVue.vue'

export default {
  components: {
    ProductList,
    CartVue,
  }
}
</script>
