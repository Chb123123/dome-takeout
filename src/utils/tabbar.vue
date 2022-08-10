<template>
  <van-tabbar route fixed z-index="9999">
  <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/submit">搜索</van-tabbar-item>
  <!-- <van-tabbar-item v-if="count == 0" icon="cart-o" to="/cart">订单</van-tabbar-item> -->
  <van-tabbar-item icon="cart-o" to="/cart">订单</van-tabbar-item>
  <van-tabbar-item v-if="userAbout" icon="friends-o"  to="/user">用户</van-tabbar-item>
  <van-tabbar-item v-else icon="friends-o" :dot="isLogin" to="/user">用户</van-tabbar-item>
</van-tabbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'tabbarStyle',
  data () {
    return {
      count: 0,
      // 判断是否登入
      isLogin: true
    }
  },
  computed: {
    ...mapState(['shoppingCart', 'userAbout'])
  }
}
</script>

<style>

</style>
