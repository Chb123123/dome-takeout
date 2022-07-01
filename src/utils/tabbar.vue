<template>
  <van-tabbar route fixed z-index="9999">
  <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="search" dot to="/submit">搜索</van-tabbar-item>
  <van-tabbar-item v-if="count == 0" icon="cart-o" to="/cart">订单</van-tabbar-item>
  <van-tabbar-item v-else icon="cart-o" :badge="count" to="/cart">订单</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/user">用户</van-tabbar-item>
</van-tabbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'tabbarStyle',
  data () {
    return {
      count: 0
    }
  },
  computed: {
    ...mapState('shoppingCart')
  },
  updated () {
    console.log(this.shoppingCart)
    this.count = this.shoppingCart.length
  }
}
</script>

<style>

</style>
