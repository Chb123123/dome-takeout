<template>
  <div class="shopinterfaceContainer">
    <div class="shopBackground">
      <img :src="'http://elm.cangdu.org/img/' + shop.image_path" alt="">
      <div class="back" @click="backBtn"><van-icon name="arrow-left" /></div>
      <div class="shopAbout">
        <div class="shopImg"><img :src="'http://elm.cangdu.org/img/' + shop.image_path" alt=""></div>
        <div class="shoptitle">{{ shop.name }}</div>
        <div class="shopscore"><span class="shopscorestyle">{{ shop.rating }}分</span><span style="margin-right: .2667rem;">商家配送时间为{{shop.order_lead_time}}</span><span>月售{{shop.rating_count}}</span></div>
        <div class="coupon"><van-icon name="star" style="font-size: .64rem;margin-right: .2667rem;"/>￥4无门槛</div>
        <div class="delivery">{{ shop.delivery_mode.text }}</div>
        <div class="delivery">配送费优惠</div>
      </div>
    </div>
    <div class="commoditys">
      <p style="margin-left: .6667rem; margin-bottom: .6667rem;">点餐</p>
      <div class="Classification">
        <span v-for="(item, index) in stopClassification" :key="item.id" @click="targetBtn(index)">{{ item.name }}</span>
      </div>
      <Foods :foodList="initshop"></Foods>
    </div>
    <div class="settlement">
      <div class="shoppingicon"><van-icon name="cart" /></div>
      <div class="settlementMoney">
        <span class="total-price">${{ sunMoney }}</span>
        <span class="delivery-fee">预计配送费5￥</span>
      </div>
      <div class="money">15元起送</div>
    </div>
  </div>
</template>

<script>
import Bus from '@/EventBus/EventBus'
import { getShopInterface } from '@/api/home/shopInterface/shopInterface'
import { mapState } from 'vuex'
import Foods from '@/components/home/shopInterface/foods/foods.vue'
export default {
  components: {
    Foods
  },
  // props: {
  //   money: {
  //     default: 0
  //   }
  // },
  data () {
    return {
      // 商品分类
      stopClassification: [],
      // 初始的商品列表
      initshop: {},
      // 需要支付的费用
      sunMoney: 0
    }
  },
  computed: {
    ...mapState(['shop'])
  },
  methods: {
    backBtn () {
      this.$router.push('/')
    },
    // 获取商店商品列表
    async getShopInterfaceList () {
      const res = await getShopInterface(this.shop.id)
      // console.log(res.data)
      // eslint-disable-next-line array-callback-return
      res.data.some((item, index) => {
        if (index <= 10) {
          this.stopClassification.push(item)
        } else {
          // console.log(item, index)
          return true
        }
      })
      this.initshop = this.stopClassification[0]
    },
    // 点击切换对应商品
    targetBtn (index) {
      console.log(index)
      this.initshop = this.stopClassification[index]
    }
  },
  created () {
    this.getShopInterfaceList()
    // eslint-disable-next-line no-unused-expressions
    // Bus.$on('addCount', (val) => {
    //   console.log(val)
    // })
  },
  updated () {
    Bus.$on('addCount', (val) => {
      console.log(this.initshop.foods)
      // eslint-disable-next-line array-callback-return
      this.initshop.foods.some((item) => {
        if (item.__v >= 0) {
          if (val[1] === item._id) {
            item.__v += val[0] - 0
            this.sunMoney += item.__v * item.specfoods[0].price
            if (item.__v < 0) {
              item.__v = 0
            }
          }
        }
      })
    })
  }
}
</script>

<style lang="less" scoped>
  .shopinterfaceContainer{
    // position: fixed;
    // left: 50%;
    // transform: translateX(-50%);
    max-width: 750px;
    padding-bottom: 2.6667rem;
    margin: auto;
    .shopBackground{
      position: relative;
      width: 20rem;
      height: 7.7333rem;
      background-color: #ccc;
      > img{
        width: 100%;
        height: 100%;
      }
      .back{
        position: absolute;
        left: .8rem;
        top: .8rem;
        width: .96rem;
        height: .96rem;
        line-height: .96rem;
        font-size: .96rem;
        color: white;
      }
      .shopAbout{
        position: absolute;
        top: 4.9333rem;
        left: 50%;
        transform: translateX(-50%);
        width: 18.6667rem;
        height: 6.8rem;
        box-shadow: 0 0 .2667rem rgba(0,0,0,.2);
        border-radius: .5333rem;
        background-color: white;
        padding: .9333rem .6667rem;
        .shopImg{
          position: absolute;
          right: .6667rem;
          top: 0.4667rem;
          width: 2.4rem;
          height: 2.4rem;
          border: .0267rem solid #ccc;
          overflow: hidden;
          border-radius: .2133rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .shoptitle{
          height: .9333rem;
          line-height: .9333rem;
          font-size: .9333rem;
          width: 13.3333rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: .5333rem;
        }
        .shopscore{
          height: .5333rem;
          line-height: .5333rem;
          width: 13.3333rem;
          font-size: .5333rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: .4rem;
          .shopscorestyle{
            color: #E47925;
            margin-right: .2667rem;
          }
        }
        .coupon{
          width: 5.3333rem;
          height: 1.2rem;
          background-color: #F3D492;
          color: #865021;
          border-radius: .2667rem;
          line-height: 1.2rem;
          text-align: center;
          margin-bottom: .4rem;
          font-size: .6933rem;
        }
        .delivery{
          // height: 35px;
          display: inline-block;
          border: .0267rem solid #D77269;
          padding: .16rem .2667rem;
          color: #D77269;
          font-size: .5333rem;
          border-radius: .2667rem;
          margin-right: .4rem;
        }
      }
    }
    .commoditys{
      margin-top: 5.0667rem;
      // padding: 0 25px;
      overflow: hidden;
      .Classification{
        float: left;
        width: 3.7333rem;
        display: flex;
        // height: 100px;
        flex-direction: column;
        background-color: #F2F2F2;
        > span{
          padding: .8rem .6667rem;
          text-align: center;
          color: #636363;
          font-size: .64rem;
        }
      }
    }
    .settlement{
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 20rem;
      height: 2.5333rem;
      background-color: white;
      z-index: 9999;
      .shoppingicon{
        float: left;
        width: 3.7333rem;
        height: 2.5333rem;
        line-height: 2.5333rem;
        text-align: center;
        font-size: 1.6rem;
        color: #24ACF2;
      }
      .settlementMoney{
        float: left;
        width: 9.6rem;
        height: 2.5333rem;
        display: flex;
        flex-direction: column;
        // background-color: red;
        overflow: hidden;
        padding: .4rem 0;
        .total-price{
          height: .8rem;
          line-height: .8rem;
          font-size: .7467rem;
          font-weight: 600;
          margin-bottom: .2667rem;
        }
        .delivery-fee{
          height: .5333rem;
          line-height: .5333rem;
          font-size: .5333rem;
          color: #666;
        }
      }
      .money{
        position: absolute;
        width: 5.6rem;
        height: 2.0533rem;
        line-height: 2.0533rem;
        text-align: center;
        top: 50%;
        right: .5333rem;
        transform: translateY(-50%);
        background-color: #989898;
        color: white;
        border-radius: 1.3333rem;
        font-size: .8rem;
      }
    }
  }
</style>
