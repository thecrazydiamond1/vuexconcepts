import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Apple', price: 2 },
      { id: 2, name: 'Banana', price: 1 },
      { id: 3, name: 'Orange', price: 3 }
    ],
    cart: []
  },

  getters: {
    cartItemCount: state => state.cart.length,
    cartTotal: state =>
      state.cart.reduce((total, item) => total + item.price, 0)
  },

  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product)
    },
    CLEAR_CART(state) {
      state.cart = []
    }
  },

  actions: {
    addToCart({ commit }, product) {
      // Async simulation (e.g., server check)
      setTimeout(() => {
        commit('ADD_TO_CART', product)
      }, 500)
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    }
  }
})
