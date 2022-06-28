<template>
  <van-tabbar route fixed z-index="9999">
  <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="search" dot to="/submit">搜索</van-tabbar-item>
  <van-tabbar-item icon="cart-o" badge="5" to="/cart">订单</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/user">用户</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
  name: 'tabbarStyle'
}
</script>

<style>

</style>
