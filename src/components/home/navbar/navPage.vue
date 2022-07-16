<template>
  <div class="navPageContainer">
    <div class="head"><span @click="back"><van-icon name="arrow-left" /></span>{{ navTitle }}</div>
      <van-dropdown-menu active-color="#1989fa">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    <SHopPing v-for="item in shopList" :key="item.id" :takeawayImg="item.image_path" :takeawayTitle="item.name" :score="item.rating" :deliveryTime="item.order_lead_time"      :distance="item.distance" :discount="item.supports" :restaurant="item"></SHopPing>
  </div>
</template>

<script>
import SHopPing from '@/components/home/TakeawayDetails.vue'
// 获取商店列表
import { getShopNavPage } from '@/api/home/NavPage/getShopNavPageAPI'
import { mapState } from 'vuex'
export default {
  components: {
    SHopPing
  },
  computed: {
    ...mapState(['addressDetails'])
  },
  data () {
    return {
      value1: 4,
      option1: [
        { text: '智能排序', value: 4 },
        { text: '配送速度', value: 3 },
        { text: '距离最近', value: 5 },
        { text: '销量最高', value: 6 }
      ],
      // 商店id
      shopId: 0,
      // 标题
      navTitle: '',
      // 餐馆类型
      order_by: 4,
      // 商店列表
      shopList: []
    }
  },
  // 当切换商店类型时，发起请求
  watch: {
    async value1 () {
      const res = await getShopNavPage(this.addressDetails.latitude, this.addressDetails.longitude, this.order_by)
      // console.log(res.data)
      this.shopList = res.data
    }
  },
  methods: {
    // 截取导航栏的id和标题
    getHashInfo () {
      const href = decodeURIComponent(location).split('?')
      this.shopId = href[1].split('&')[0]
      this.shopId = this.shopId.split('=')[1]
      this.navTitle = href[1].split('&')[1]
      this.navTitle = this.navTitle.split('=')[1]
    },
    back () {
      this.$router.back(-1)
    },
    async getShopList () {
      const res = await getShopNavPage(this.addressDetails.latitude, this.addressDetails.longitude, this.order_by)
      // console.log(res.data)
      this.shopList = res.data
    }
  },
  created () {
    this.getHashInfo()
    this.getShopList()
  }
}
</script>

<style lang="less" scoped>
  .navPageContainer{
    margin: auto;
    max-width: 20rem;
    height: 100vh;
    overflow-y: auto;
    background-color: #F6F6F6;
    padding-top: 6.6667rem;
    /deep/.van-dropdown-menu__bar{
      position: fixed;
      height: 2rem;
      top: 4rem;
      width: 20rem;
      z-index: 999;
    }
    /deep/.van-dropdown-menu__title{
      font-size: .7467rem;
      height: .7467rem;
      line-height: .7467rem;
    }
    /deep/.van-cell__title, .van-cell__value{
      height: 1.3333rem;
      line-height: 1.3333rem;
      font-size: .7467rem;
    }
    .head{
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 4rem;
      width: 20rem;
      background-color: #019EFD;
      line-height: 4rem;
      font-size: 1.28rem;
      color: white;
      padding-left: .6667rem;
      z-index: 9999;
      > span{
        margin-right: .5333rem;
      }
    }
    .shop_by{
      height: 2rem;
      width: 20rem;
      background-color: white;
      position: fixed;
      top: 4rem;
      left: 50%;
      font-size: .7467rem;
      line-height: 2rem;
      transform: translateX(-50%);
      // padding-left: .6667rem;
    }
    .aaa{
      height: 10000px;
      background-color: red;
    }
  }
</style>
