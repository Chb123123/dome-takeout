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
    flag: true,
    // 搜索店铺的历史记录
    historySubmit: []
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
    },
    // 将搜索的历史记录保存到historySubmit
    gethistorySubmit (state, keyword) {
      state.historySubmit.push(keyword)
    },
    // 触发事件，清空历史记录
    clearhistorySubmit (state) {
      state.historySubmit = []
    }
  },
  actions: {
  },
  modules: {
  }
})
