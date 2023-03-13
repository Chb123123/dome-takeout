<template>
  <div class="AppContainer">
    <div class="Apphead">
      <div class="address" @click="gotoSubmit">{{ address.name }} <span class="move"></span></div>
      <div class="address" @click="gotoSubmit">{{ address.name }} <span class="move"></span></div>
      <div class="shopping-cart" @click="gotoOrede"><van-icon name="cart-o" /></div>
      <div class="Private-letter" @click="information"><van-icon name="comment-o" /></div>
    </div>
    <!-- 搜索模块 -->
    <div class="submitBox" @click="gotoSubmitCom">
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
      <span v-for="(item ,index) in shopNav" :key="index" :class="item.class" @click="checkedBtn(index)">{{ item.text }}</span>
    </div>
    <div class="takewayBox">
      <van-list
        v-model="loading"
        :finished="finished"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <Takeaway v-for="item in shopList" :key="item.id"       :takeawayImg="item.image_path" :takeawayTitle="item.name" :score="item.rating" :deliveryTime="item.order_lead_time"      :distance="item.distance" :discount="item.supports" :restaurant="item"></Takeaway>
      </van-list>
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
// 商品导航栏
import { getShopNavbar } from '@/api/home/getShopNavbarAPI'
// 获取商店列表
import { TackawayAboutList } from '@/api/home/getTackawayAboutAPI'
import Takeaway from '@/components/home/TakeawayDetails.vue'
// 导航栏组件
import Navber from '@/components/home/navbar/navBarList.vue'
import { getCurrentAddress } from '@/api/home/getCurrentAddressAPI.js'
import Tabbar from '../utils/tabbar.vue'
import { Dialog, Toast } from 'vant'
export default {
  name: 'myHome',
  components: {
    Takeaway,
    Tabbar,
    Navber
  },
  data () {
    return {
      address: {},
      // 店铺列表
      shopList: [],
      shopList_1: [],
      error: false,
      // 是否加载
      loading: true,
      // 数据是否加载完成
      finished: false,
      // 当前店铺偏移的数量
      num: 0,
      // 商品导航栏
      shopNavList: [],
      // 获取商品排序的ID
      order_by: 4,
      // 商店标签栏
      shopNav: [
        { class: 'checkedStyle', text: '智能排序' },
        { class: '', text: '配送速度' },
        { class: '', text: '距离最近' },
        { class: '', text: '销量最高' }
      ]
    }
  },
  computed: {
    ...mapState(['detailedAddress', 'addressDetails', 'showHint'])
  },
  methods: {
    ...mapMutations(['newAddress', 'isShowHint', 'getUserAbout']),
    // 前往搜索组件
    gotoSubmitCom () {
      this.$router.push('/submit')
    },
    async getTakeawayAbout () {
      const res = await TackawayAboutList(this.address.longitude, this.address.latitude, this.num, this.order_by)
      this.shopList = res.data
      this.shopList_1 = res.data
      this.loading = false
    },
    // 下拉触发事件
    async onLoad () {
      this.num += 20
      const res = await TackawayAboutList(this.address.longitude, this.address.latitude, this.num, this.order_by)
      this.shopList = [...this.shopList, ...res.data]
      this.loading = false
    },
    // 获取商品导航栏
    async ShopNavBar () {
      const res = await getShopNavbar()
      let navList = []
      res.data.forEach((item, index) => {
        navList.push(item)
        if ((index + 1) % 8 === 0) {
          this.shopNavList.push(navList)
          navList = []
        }
      })
    },
    // 获取当前所在城市
    async getNewCity () {
      const res = await getCurrentAddress()
      if (this.detailedAddress) {
        this.address = this.detailedAddress
        this.getTakeawayAbout(this.detailedAddress.longitude, this.detailedAddress.latitude)
      } else {
        this.address = res.data
        this.newAddress(this.address)
        this.getTakeawayAbout(this.addressDetails.longitude, this.addressDetails.latitude)
      }
    },
    // 点击跳转到搜索界面
    gotoSubmit () {
      this.$router.push('/submitarea')
    },
    // 点击切换状态栏
    async checkedBtn (index) {
      this.shopList = []
      // eslint-disable-next-line array-callback-return
      this.shopNav.some((item) => {
        item.class = ''
      })
      this.shopNav[index].class = 'checkedStyle'
      if (index === 0) {
        this.order_by = 4
        this.shopList = this.shopList_1
      } else if (index === 1) {
        this.order_by = 2
        const res = await TackawayAboutList(this.address.longitude, this.address.latitude, this.num, this.order_by)
        this.shopList = res.data
      } else if (index === 2) {
        this.order_by = 5
        const res = await TackawayAboutList(this.address.longitude, this.address.latitude, this.num, this.order_by)
        this.shopList = res.data
      } else {
        this.order_by = 6
        const res = await TackawayAboutList(this.address.longitude, this.address.latitude, this.num, this.order_by)
        this.shopList = res.data
      }
      console.log(index)
    },
    gotoOrede () {
      this.$router.push('/cart')
    },
    information () {
      Toast({
        message: '暂无功能',
        icon: 'comment-o'
      })
    }
  },
  created () {
    // 获取用户信息
    const userInfo = JSON.parse(localStorage.getItem('elementUserInfo'))
    console.log(userInfo)
    if (userInfo) {
      this.getUserAbout(userInfo)
    }
    this.getNewCity()
    this.ShopNavBar()
    if (this.showHint) {
      Dialog.alert({
        title: '注意',
        message: '该项目还处于开发阶段，部分功能还未完成，敬请期待'
      }).then(() => {
      // on close
      })
      this.isShowHint()
    }
  }
}
</script>

<style lang="less" scoped>
  .AppContainer{
    max-width: 20rem;
    min-width: 8rem;
    margin: auto;
    border: .0267rem solid #ccc;
    background-color: #eee;
    padding-bottom: 2.1333rem;
    .Apphead{
      position: relative;
      height: 1.8667rem;
      line-height: 1.3333rem;
      background-color: white;
      padding: .2667rem .6667rem 0;
      .address{
        position: absolute;
        font-size: .8rem;
        // margin-left: .5333rem;
        // border: 1px solid red;
        .move{
          display: inline-block;
          width: 0;
          height: 0;
          border-left: .2667rem solid #888;
          border-top: .2667rem solid #888;
          border-right: .2667rem solid transparent;
          border-bottom: .2667rem solid transparent;
          transform: rotateZ(225deg);
          margin-bottom: .1333rem;
        }
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
      height: 1.8667rem;
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
      .checkedStyle{
        background-color: #0BB7F7;
        color: white;
      }
    }
  }
</style>
