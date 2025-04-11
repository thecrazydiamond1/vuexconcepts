<template>
    <div>
      <h2>Cart</h2>
      <p>Items in cart: {{ cartItemCount }}</p>
      <p>Total: ${{ cartTotal }}</p>
      <button @click="clearCart">Clear Cart</button>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters(['cartItemCount', 'cartTotal'])
    },
    methods: {
      ...mapActions(['clearCart'])
    }
  }
  </script>
  