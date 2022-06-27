<template>
  <div class="AppContainer">
    <div class="Apphead">
      <div class="address">{{ address.name }}</div>
      <div class="shopping-cart"><van-icon name="cart-o" /></div>
      <div class="Private-letter"><van-icon name="comment-o" /></div>
    </div>
  </div>
</template>

<script>
import { getCurrentAddress } from '@/api/home/getCurrentAddressAPI.js'
export default {
  data () {
    return {
      address: ''
    }
  },
  async created () {
    const res = await getCurrentAddress()
    console.log(res)
    this.address = res.data
  }
}
</script>

<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .AppContainer{
    max-width: 20rem;
    margin: auto;
    border: 1px solid #ccc;
    .Apphead{
      position: relative;
      height: 1.3333rem;
      line-height: 1.3333rem;
      .address{
        position: absolute;
        font-size: .4267rem;
        margin-left: .2667rem;
        // border: 1px solid red;
      }
      .shopping-cart{
        position: absolute;
        right: 1.8667rem;
        font-size: .6667rem;
        width: 1.3333rem;
        text-align: center;
      }
      .Private-letter{
        position: absolute;
        right: .2667rem;
        font-size: .6667rem;
        width: 1.3333rem;
        text-align: center;
      }
    }
  }
</style>
