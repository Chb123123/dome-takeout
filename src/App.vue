<template>
  <div class="AppContainer">
    <div class="Apphead">
      <div class="address">{{ address.name }}</div>
      <div class="shopping-cart"><van-icon name="cart-o" /></div>
      <div class="Private-letter"><van-icon name="comment-o" /></div>
    </div>
    <!-- 搜索模块 -->
    <div class="submitBox">
      <div class="submit">
        <div class="submitBtn">搜索</div>
        <div class="photograph"><van-icon name="photograph" /></div>
        <div class="submitSuggest">派乐炸鸡汉堡</div>
      </div>
    </div>
    <!-- 导航栏模块 -->
    <div class="navbar">
      <Navber :navList="shopNavList"></Navber>
    </div>
    <div class="Attributes">
      <span>智能排序</span>
      <span>配送速度</span>
      <span>距离最近</span>
      <span>销量最高</span>
    </div>
    <div class="takewayBox">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <Takeaway v-for="item in shopList" :key="item.id"       :takeawayImg="item.image_path" :takeawayTitle="item.name" :score="item.rating" :deliveryTime="item.order_lead_time"      :distance="item.distance" :discount="item.supports"></Takeaway>
      </van-list>
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
// 商品导航栏
import { getShopNavbar } from '@/api/home/getShopNavbarAPI'
// 获取商店列表
import { TackawayAboutList } from '@/api/home/getTackawayAboutAPI'
import Takeaway from '@/components/home/TakeawayDetails.vue'
// 导航栏组件
import Navber from '@/components/home/navbar/navBarList.vue'
import { getCurrentAddress } from '@/api/home/getCurrentAddressAPI.js'
import Tabbar from './utils/tabbar.vue'
export default {
  components: {
    Takeaway,
    Tabbar,
    Navber
  },
  data () {
    return {
      address: '',
      // 店铺列表
      shopList: [],
      // 是否加载
      loading: true,
      // 数据是否加载完成
      finished: false,
      // 当前店铺偏移的数量
      num: 0,
      // 商品导航栏
      shopNavList: []
    }
  },
  methods: {
    async getTakeawayAbout () {
      const res = await TackawayAboutList()
      // console.log(res.data)
      this.shopList = res.data
      this.loading = false
    },
    // 下拉触发事件
    async onLoad () {
      this.num += 20
      console.log('11')
      const res = await TackawayAboutList(this.num)
      // console.log(res.data)
      this.shopList = [...this.shopList, ...res.data]
      this.loading = false
    },
    // 获取商品导航栏
    async ShopNavBar () {
      const res = await getShopNavbar()
      console.log(res.data)
      this.shopNavList = res.data
    }
  },
  async created () {
    const res = await getCurrentAddress()
    // console.log(res)
    this.address = res.data
    this.getTakeawayAbout()
    this.ShopNavBar()
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
    padding-bottom: 1.3333rem;
    .Apphead{
      position: relative;
      height: 1.8667rem;
      line-height: 1.3333rem;
      background-color: white;
      padding: 0 .6667rem;
      .address{
        position: absolute;
        font-size: .8rem;
        // margin-left: .5333rem;
        // border: 1px solid red;
      }
      .shopping-cart{
        position: absolute;
        right: 1.8667rem;
        font-size: .9333rem;
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
    .submitBox{
      height: 70px;
      background-color: white;
      .submit{
        position: relative;
        height: 1.8667rem;
        // background-color: blue;
        width: 18.8267rem;
        margin: auto;
        border: .0533rem solid #1CA7D1;
        border-radius: 1.3333rem;
        .submitBtn{
          position: absolute;
          width: 3.4667rem;
          height: 1.8133rem;
          right: 0;
          top: -0.0267rem;
          background-color: #0BB7F7;
          color: white;
          text-align: center;
          line-height: 1.8667rem;
          border-radius: 1.3333rem;
          font-size: .64rem;
        }
        .photograph{
          position: absolute;
          left: .6667rem;
          top: 50%;
          transform: translateY(-50%);
          color: #34AFE2;
          font-size: 1.2267rem;
        }
        .submitSuggest{
          position: absolute;
          height: .9333rem;
          left: 2.2667rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9C9E9D;
          border-left: .0267rem solid #ccc;
          padding-left: .4rem;
          font-size: .64rem;
        }
      }
    }
    .Attributes{
      margin: .2667rem 0;
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      padding: 0 .6667rem;
      // background-color: red;
      > span{
        width: 3.6rem;
        height: 1.2rem;
        background-color: white;
        line-height: 1.2rem;
        text-align: center;
        border-radius: .2667rem;
        color: #626262;
        font-size: .64rem;
      }
    }
  }
</style>
