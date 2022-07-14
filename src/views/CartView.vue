<template>
  <div class="cartViweContainer">
    <div class="cartViweHead">
      <span v-if="showNav === 0" @click="allBtn(0)">全部</span>
      <span v-else class="notCheck" @click="allBtn(0)">全部</span>
      <span v-if="showNav === 1" @click="allBtn(1)">已完成</span>
      <span v-else class="notCheck" @click="allBtn(1)">已完成</span>
      <span  v-if="showNav === 2"  @click="allBtn(2)">未完成</span>
      <span v-else class="notCheck" @click="allBtn(2)">未完成</span>
    </div>
    <div v-if="orderList.length !== 0">
      <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <!-- <div v-if="completedOrder.length > 0">
    <MyCompletedOrder v-for="item in orderList" :key="item._id" :shoppingname="item.restaurant_name" :shoppingImg="item.restaurant_image_url" :orderState="item.status_bar.title" :shop="item.basket.group[0][0].name" :deliveryTime="item.formatted_created_at" :TradingInformation="item.status_bar.title" :shopPrice="item.basket.group[0][0].price" :quantity="item.basket.group[0][0].quantity"></MyCompletedOrder>
  </div> -->
  <Order v-for="item in orderList" :key="item._id" :shoppingname="item.restaurant_name" :shoppingImg="item.restaurant_image_url" :orderState="item.status_bar.title" :shop="item.basket.group[0][0].name" :deliveryTime="item.formatted_created_at" :TradingInformation="item.status_bar.title" :shopPrice="item.basket.group[0][0].price" :quantity="item.basket.group[0][0].quantity"></Order>
</van-list>
    </div>
    <div>
      <van-empty description="暂无订单" />
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// 获取订单列表
import { getOrderList } from '@/api/order/getOrderListAPI'
import Order from '@/components/order/orderCom.vue'
// import MyCompletedOrder from '@/components/order/completedOrder.vue'
// 导航栏组件
import Tabbar from '../utils/tabbar.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Tabbar,
    Order
    // MyCompletedOrder
  },
  computed: {
    ...mapState(['completedOrder'])
  },
  data () {
    return {
      orderList: [],
      // 未完成的订单
      notFinish: [],
      // 是否加载
      loading: true,
      // 数据是否加载完成
      finished: false,
      // 设置请求数据跳过的数量
      num: 0,
      // 显示当前导航栏的标签id
      showNav: 0
    }
  },
  methods: {
    async onLoad () {
      this.num += 20
      const res = await getOrderList(20, this.num)
      // console.log(res.data)
      this.orderList = [...this.orderList, ...res.data]
      this.loading = false
    },
    async getOrderLiet () {
      const res = await getOrderList(20, 0)
      // console.log(res.data)
      this.orderList = res.data
      this.notFinish = res.data
      this.loading = false
    },
    allBtn (num) {
      // console.log(num)
      this.showNav = num
      if (num === 1) {
        this.orderList = []
      } else if (num === 2) {
        this.orderList = this.notFinish
      } else {
        this.orderList = this.notFinish
      }
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
    padding-top: 2.9333rem;
    padding-bottom: 1.3333rem;
    height: 100vh;
    overflow-y: auto;
    .cartViweHead{
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 2.5333rem;
      max-width: 20rem;
      line-height: 2.5333rem;
      font-size: .8rem;
      width: 20rem;
      margin: auto;
      padding: 0 .6667rem;
      background-color: #EEEEEE;
      z-index: 999;
      > span{
        // background-color: red;
        border-bottom: .1867rem solid #E36049;
        margin-right: .8rem;
      }
      .notCheck{
        color: #777;
        border: 0;
      }
    }
  }
</style>
