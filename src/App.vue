<template>
  <div class="AppContainer">
    <div class="Apphead">
      <div class="address">{{ address.name }}</div>
      <div class="shopping-cart"><van-icon name="cart-o" /></div>
      <div class="Private-letter"><van-icon name="comment-o" /></div>
    </div>
    <div class="takewayBox">
      <Takeaway v-for="item in shopList" :key="item.id" :takeawayImg="item.image_path" :takeawayTitle="item.name" :score="item.rating" :deliveryTime="item.order_lead_time" :distance="item.distance"></Takeaway>
    </div>
  </div>
</template>

<script>
// 获取商店列表
import { TackawayAboutList } from '@/api/home/getTackawayAboutAPI'
import Takeaway from '@/components/home/TakeawayDetails.vue'
import { getCurrentAddress } from '@/api/home/getCurrentAddressAPI.js'
export default {
  components: {
    Takeaway
  },
  data () {
    return {
      address: '',
      // 店铺列表
      shopList: []
    }
  },
  methods: {
    async getTakeawayAbout () {
      const res = await TackawayAboutList()
      console.log(res.data)
      this.shopList = res.data
    }
  },
  async created () {
    const res = await getCurrentAddress()
    console.log(res)
    this.address = res.data
    this.getTakeawayAbout()
  }
}
</script>

<style lang="less" scoped>
  .AppContainer{
    max-width: 20rem;
    min-width: 8rem;
    margin: auto;
    border: 1px solid #ccc;
    background-color: #eee;
    .Apphead{
      position: relative;
      height: 1.3333rem;
      line-height: 1.3333rem;
      .address{
        position: absolute;
        font-size: .7467rem;
        margin-left: .2667rem;
        // border: 1px solid red;
      }
      .shopping-cart{
        position: absolute;
        right: 1.8667rem;
        font-size: .8rem;
        width: 1.3333rem;
        text-align: center;
      }
      .Private-letter{
        position: absolute;
        right: .2667rem;
        font-size: .9333rem;
        width: 1.3333rem;
        text-align: center;
      }
    }
  }
</style>
