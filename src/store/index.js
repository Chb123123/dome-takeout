import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addressDetails: {},
    // 详细地址
    detailedAddress: null,
    // 店铺id
    shop: null
  },
  getters: {
  },
  mutations: {
    newAddress (state, object) {
      state.addressDetails = object
    },
    getdetailedAddress (state, object) {
      state.detailedAddress = object
    },
    getshopid (state, step) {
      state.shop = step
    }
  },
  actions: {
  },
  modules: {
  }
})
