<template>
  <div class="cartViweContainer">
    <div class="cartViweHead">全部</div>
    <Order v-for="item in orderList" :key="item._id" :shoppingname="item.restaurant_name" :shoppingImg="item.restaurant_image_url" :orderState="item.status_bar.title" :shop="item.basket.group[0][0].name"></Order>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// 获取订单列表
import { getOrderList } from '@/api/order/getOrderListAPI'
import Order from '@/components/order/orderCom.vue'
// 导航栏组件
import Tabbar from '../utils/tabbar.vue'
export default {
  components: {
    Tabbar,
    Order
  },
  data () {
    return {
      orderList: []
    }
  },
  methods: {
    async getOrderLiet () {
      const res = await getOrderList(20, 0)
      console.log(res.data)
      this.orderList = res.data
    }
  },
  created () {
    this.getOrderLiet()
  }
}
</script>

<style lang="less" scoped>
  .cartViweContainer{
    margin: auto;
    background-color: #eee;
    padding-top: 2.1333rem;
    padding-bottom: 1.3333rem;
    height: 100vh;
    overflow-y: auto;
    .cartViweHead{
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 1.6rem;
      max-width: 20rem;
      line-height: 1.6rem;
      font-size: .8rem;
      width: 20rem;
      margin: auto;
      padding: 0 .6667rem;
      background-color: #EEEEEE;
      z-index: 999;
    }
  }
</style>
