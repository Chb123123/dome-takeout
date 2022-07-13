<template>
<!-- 订单完成模块 -->
  <div class="orderContainer">
    <div class="head" @click="gotoCart">订单已完成<span><van-icon name="arrow" /></span></div>
    <div class="shopList">
      <div class="shopName">老赵菜馆</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoCart () {
      this.$router.replace('/Cart')
    }
  }
}
</script>

<style lang="less" scoped>
  .orderContainer{
    max-width: 20rem;
    height: 100vh;
    overflow: scroll;
    background-color: #eee;
    .head{
      height: 2.5333rem;
      line-height: 2.5333rem;
      font-size: 1.2rem;
      padding: 0 .6667rem;
      > span{
        font-size: .8533rem;
        margin-left: .4rem;
      }
    }
    .shopList{
      padding: .6667rem;
      width: 18.8rem;
      margin: auto;
      background-color: white;
      border-radius: 20px;
    }
  }
</style>
