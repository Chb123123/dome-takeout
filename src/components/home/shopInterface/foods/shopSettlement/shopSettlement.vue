<template>
  <div class="settlementContainer">
    <div class="head">
      确认订单
      <div class="back" @click="backShop"><van-icon name="arrow-left" /></div>
    </div>
    <div class="userAddress">123</div>
    <div class="userPhone">123</div>
    <div class="shopAbout"></div>
    <div class="settlementMoney"></div>
  </div>
</template>

<script>
export default {
  methods: {
    backShop () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  .settlementContainer{
    height: 100vh;
    max-width: 20rem;
    margin: auto;
    background: -webkit-linear-gradient(top, #01B6FB, #B6E4F8, #F6F6F6);
    overflow-y: auto;
    padding-bottom: 100px;
    .head{
      position: relative;
      height: 100px;
      line-height: 100px;
      font-size: .7467rem;
      color: white;
      text-align: center;
      .back{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: .6667rem;
        font-size: .7467rem;
      }
    }
    .userAddress{
      height: 8.2667rem;
      width: 18.8rem;
      margin: 0 auto .2667rem;
      background-color: white;
      border-radius: .5333rem;
    }
    .userPhone{
      height: 3.8667rem;
      background-color: white;
      width: 18.8rem;
      margin:0 auto .2667rem;
      border-radius: .5333rem;
    }
    .shopAbout{
      width: 18.8rem;
      background-color: white;
      margin: auto;
      height: 200px;
      border-radius: .5333rem;
    }
    .settlementMoney{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 20rem;
      background-color: white;
      height: 2.5333rem;
      box-shadow: 0 0 .2667rem rgba(0,0,0,.3);
    }
  }
</style>
