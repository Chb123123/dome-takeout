<template>
  <div class="cartViweContainer">
    <div class="cartViweHead">全部</div>
    <Order></Order>
    <Order></Order>
    <Order></Order>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Order from '@/components/order/orderCom.vue'
// 导航栏组件
import Tabbar from '../utils/tabbar.vue'
export default {
  components: {
    Tabbar,
    Order
  }
}
</script>

<style lang="less" scoped>
  .cartViweContainer{
    margin: auto;
    background-color: #eee;
    padding-top: 2.1333rem;
    .cartViweHead{
      height: 1.6rem;
      line-height: 1.6rem;
      font-size: .8rem;
      width: 20rem;
      margin: auto;
      padding: 0 .6667rem;
    }
  }
</style>
