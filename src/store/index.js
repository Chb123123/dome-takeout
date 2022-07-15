import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    // userAbout: null,
    userAbout: {
      username: '蔡怀彬',
      phone: 123242342342
    },
    addressDetails: {},
    // 详细地址
    detailedAddress: null,
    // 店铺id
    shop: null,
    // 将添加的商品存放到此处
    shoppingCart: [],
    flag: true,
    // 搜索店铺的历史记录
    historySubmit: [],
    // 是否显示提示弹窗
    showHint: true,
    // 用户可用红包
    userUseRedEvnelope: null,
    // 用户选中的商品列表
    userCheckedShop: [],
    // 订单详情
    OrderElement: null,
    // 完成的订单列表
    completedOrder: [],
    // 用户余额
    userBalance: 200
  },
  getters: {
  },
  mutations: {
    isShowHint (state) {
      state.showHint = false
    },
    getUserAbout (state, object) {
      state.userAbout = object
    },
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
    },
    // 第一次发起红包请求时，将数据存储到userUseRedEvnelope
    getUserUseRedEvnelope (state, object) {
      state.userUseRedEvnelope = object
    },
    // 当用户点击提交订单时，扣除选中的红包
    clearRedEvnelope (state, id) {
      console.log(id)
      console.log(state.userUseRedEvnelope)
      // eslint-disable-next-line array-callback-return
      state.userUseRedEvnelope.some((item, index) => {
        if (item.id === id) {
          state.userUseRedEvnelope.splice(index, 1)
        }
      })
    },
    // 当用户点击结算时，将选中的商品列表存储到 userCheckedShop
    getUserCheckedShop (state, object) {
      state.userCheckedShop = object
      // 将完成的订单添加到完成的订单列表
      // console.log(object)
      // 将获取的用户订单存放到
    },
    // 获取用户订单详情
    getOrderElement (state, object) {
      state.OrderElement = object
      state.completedOrder.push(state.OrderElement)
    },
    // 当点击结算时减少用户余额
    reduceBalance (state, price) {
      state.userBalance -= price
    }
  },
  actions: {
  },
  modules: {
  }
})
