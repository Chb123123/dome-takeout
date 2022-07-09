<template>
  <div class="redEvnelopeContainer">
    <div class="head"><span class="back" @click="back"><van-icon name="arrow-left" /></span>可用红包</div>
    <RedConpon></RedConpon>
    <RedConpon></RedConpon>
    <RedConpon></RedConpon>
    <RedConpon></RedConpon>
  </div>
</template>

<script>
// 导入红包组件
import RedConpon from './coupon/redCoupon.vue'
export default {
  components: {
    RedConpon
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  .redEvnelopeContainer{
    max-width: 20rem;
    margin: auto;
    height: 100vh;
    background-color: #EEEEEE;
    padding-top: 2.6667rem;
    .head{
      position: relative;
      height: 2.6667rem;
      line-height: 2.6667rem;
      background-color: white;
      width: 20rem;
      text-align: center;
      position: fixed;
      top: 0;
      left: 50%;
      font-size: .8533rem;
      transform: translateX(-50%);
      .back{
        position: absolute;
        left: .5333rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1.6rem;
        // background-color: red;
      }
    }
  }
</style>
