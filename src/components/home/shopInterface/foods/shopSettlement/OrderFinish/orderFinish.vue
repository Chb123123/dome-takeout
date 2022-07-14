<template>
<!-- 订单完成模块 -->
  <div class="orderContainer">
    <div class="head" @click="gotoCart">订单已完成<span><van-icon name="arrow" /></span></div>
    <div class="shopList">
      <div class="shopName">{{ shopOrderElement.shopPingName }}</div>
      <ShopList style="margin-top: 1.066rem" v-for="item in shopPingList" :key="item._id" :shopCount="item.__v" :shopImg="item.image_path" :shopName="item.name" :shopPrice="item.specfoods[0].price"></ShopList>
      <div class="SunPrice">
        <div class="payPrice" style="margin-bottom: 1.066rem;">打包费
          <span>￥0.00</span>
        </div>
        <div class="payPrice">用户配送费
          <span>￥5.00</span>
        </div>
      </div>
      <div v-if="OrderElement.discount !== 0" class="useRedEvnelope">使用红包
        <span>￥{{ OrderElement.discount }}</span>
      </div>
      <div class="settlement"><span class="discount">已优惠￥{{ shopOrderElement.discount }}</span>合计<span>￥{{shopOrderElement.totalPrice}}</span></div>
    </div>
  </div>
</template>

<script>
import ShopList from '../buyShop.vue'
import { mapState } from 'vuex'
export default {
  components: {
    ShopList
  },
  data () {
    return {
      shopPingList: [],
      shopOrderElement: null
    }
  },
  computed: {
    ...mapState(['userCheckedShop', 'OrderElement'])
  },
  methods: {
    gotoCart () {
      this.$router.replace('/Cart')
    }
  },
  created () {
    console.log(this.userCheckedShop)
    this.shopPingList = this.userCheckedShop
    this.shopOrderElement = this.OrderElement
  }
}
</script>

<style lang="less" scoped>
  .orderContainer{
    max-width: 20rem;
    height: 100vh;
    overflow: scroll;
    background-color: #eee;
    margin: auto;
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
      padding: 0 .6667rem;
      width: 18.8rem;
      margin: auto;
      background-color: white;
      border-radius: 20px;
      .shopName{
        height: 2.2667rem;
        line-height: 2.2667rem;
        font-size: .7467rem;
        // background-color: red;
        border-bottom: .0267rem solid #ccc;
      }
      .SunPrice{
        margin-top: 1.0667rem;
        height: 4.6667rem;
        border-top: .0267rem solid #ccc;
        border-bottom: .0267rem solid #ccc;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .payPrice{
          position: relative;
          height: .7467rem;
          line-height: .7467rem;
          font-size: .7467rem;
          > span{
            position: absolute;
            font-size: .7467rem;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .useRedEvnelope{
        position: relative;
        height: 2.6667rem;
        line-height: 2.6667rem;
        font-size: .7467rem;
        // color: #FD4D24;
        border-bottom: .0267rem solid #ccc;
        > span{
            position: absolute;
            font-size: .7467rem;
            right: 0;
            top: 50%;
            color: #FD4D24;
            transform: translateY(-50%);
        }
      }
      .settlement{
        text-align: right;
        height: 2.8rem;
        font-size: .64rem;
        line-height: 2.8rem;
        > span{
          font-size: .8533rem;
          vertical-align: middle;
          margin-left: .2667rem;
        }
        .discount{
          font-size: .64rem;
          margin-right: 10px;
        }
      }
    }
  }
</style>
