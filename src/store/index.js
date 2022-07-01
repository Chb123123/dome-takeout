import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addressDetails: {},
    // 详细地址
    detailedAddress: null,
    // 店铺id
    shop: null,
    // 将添加的商品存放到此处
    shoppingCart: [],
    flag: true
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
    },
    getshoppingCart (state, object) {
      if (state.shoppingCart.length > 0) {
        // eslint-disable-next-line array-callback-return
        state.shoppingCart.some((item) => {
          if (object._id === item._id) {
            item.count = object.count
            state.flag = false
            return true
          }
        })
        if (state.flag) {
          state.shoppingCart.push(object)
        }
      } else {
        state.shoppingCart.push(object)
      }
      state.flag = true
    }
  },
  actions: {
  },
  modules: {
  }
})
