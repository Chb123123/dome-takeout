<template>
  <div class="settlementContainer">
    <div class="head">
      确认订单
      <div class="back" @click="backShop"><van-icon name="arrow-left" /></div>
    </div>
    <div class="userAddress">
      <div class="Address">{{ addressDetails.name }}</div>
      <div class="userAbout">{{ userAbout.username }}</div>
      <div class="delivey">立即送出
        <div class="deliveyTime">预计9:00送到</div>
      </div>
      <div class="fayWay">支付方式
        <div class="fay">余额</div>
      </div>
    </div>
    <div class="userPhone">
      <div class="Phone">用户手机号
        <span>{{ userAbout.phone }}</span>
      </div>
      <div class="encryption">供商家、骑士使用（默认加密）</div>
    </div>
    <div class="shopAbout">
      <div class="shoppingName">奶茶</div>
      <BuyShop v-for="item in checkedShopList" :key="item.id" :shopCount="item.__v" :shopImg="item.image_path" :shopName="item.name" :shopPrice="item.specfoods[0].price"></BuyShop>
      <div class="delivery"><div class="icon">￥</div>打包费
        <div class="UitpriceStyle"><span>￥</span>0</div>
      </div>
      <div class="delivery"><div class="icon">￥</div>配送费
        <div class="UitpriceStyle"><span>￥</span>5</div>
      </div>
      <div class="delivery" @click="useRedEnvelope"><div class="icon"><van-icon name="coupon" /></div>使用红包
        <!-- <div class="UitpriceStyle"><span>￥</span>5</div> -->
        <div v-if="checkedRedEvnelope === null" class="useRedConpon">未使用红包<van-icon name="arrow" /></div>
        <div v-else class="useRedConpon"><span>-￥</span>{{ checkedRedEvnelope.price }}</div>
      </div>
    </div>
    <div class="settlementMoney">
      <div class="SunMoney">
        <div class="price">合计 ￥<span class="priceStyle">{{ checkedShopSunPrice }}</span></div>
        <div v-if="isDiscount === false" class="Notdiscount">暂无优惠</div>
        <div v-else class="discount">优惠{{ checkedRedEvnelope.price }}元</div>
      </div>
      <div v-if="showSettlement" class="settlement" @click="settlement">提交订单</div>
      <div v-else class="settlement" @click="settlement"><van-loading size="0.75rem" color="white">提交订单...</van-loading></div>
    </div>
    <van-action-sheet v-model="show" :closeable="false" title="可用红包">
  <div class="content">
    <RedEvnelope v-for="item in availableRedComponList" :key="item.id" :availableRedComponTime="item.end_date" :availPrice="item.amount" :online_paid_only="item.description_map.online_paid_only" :limited="item.description_map.phone" :RedConponName="item.name" :sum_condition="item.sum_condition" :GetredEvnelopeId="item.id" @redEvnelopeId="getredEvnelopeId" :settlementPrice="checkedShopSunPrice"></RedEvnelope>
  </div>
</van-action-sheet>
  </div>
</template>

<script>
// 获取可用红包
import { getAvailableRedCompon } from '@/api/user/RedCompon/availableRedCompon'
import RedEvnelope from './redEvnelope.vue'
import BuyShop from './buyShop.vue'
import { mapMutations, mapState } from 'vuex'
import { Toast } from 'vant'
export default {
  components: {
    BuyShop,
    RedEvnelope
  },
  data () {
    return {
      showSettlement: true,
      show: false,
      availableRedComponList: [],
      // 选中的商品
      checkedShopList: [],
      // 选中的红包
      checkedRedEvnelope: null,
      checkedShopSunPrice: 5,
      // 是否使用优惠券
      isDiscount: false,
      // 将之前的优惠券金额存储
      FrontRedEvnelopePrice: 0
    }
  },
  computed: {
    ...mapState(['userUseRedEvnelope', 'userCheckedShop', 'userAbout', 'addressDetails', 'shop', 'userBalance'])
  },
  methods: {
    ...mapMutations(['getUserUseRedEvnelope', 'clearRedEvnelope', 'getOrderElement', 'reduceBalance']),
    backShop () {
      this.$router.back(-1)
    },
    settlement () {
      // 获取当前下单的时间
      const Balance = this.checkedShopSunPrice - this.FrontRedEvnelopePrice
      // this.reduceBalance(Balance)
      if (this.userBalance - Balance > 0) {
        this.showSettlement = false
        this.reduceBalance(Balance)
        setTimeout(() => {
          this.showSettlement = true
          if (this.checkedRedEvnelope) {
            this.clearRedEvnelope(this.checkedRedEvnelope.id)
          }
          this.$router.replace('/orderFinish')
        }, 2500)
        const data = {
          // 商品总价
          totalPrice: this.checkedShopSunPrice,
          // 优惠券金额
          discount: this.FrontRedEvnelopePrice,
          // 店铺名称
          shopPingName: this.shop.name,
          // 店铺图片
          shoppingImg: this.shop.image_path,
          // 结算价格
          Balance: Balance,
          // 下单时间
          deliveryTime: this.getNewTime(),
          // 交易状态
          orderState: '交易成功',
          // 选中的商品
          checkedShop: this.checkedShopList
        }
        this.getOrderElement(data)
      } else {
        Toast.fail('余额不足')
      }
    },
    // 使用红包
    useRedEnvelope () {
      this.show = true
    },
    // 获取当前的时间
    getNewTime () {
      const NewTime = new Date()
      const Year = NewTime.getFullYear()
      const Month = NewTime.getMonth() + 1
      const D = NewTime.getDate()
      const H = NewTime.getHours()
      const M = NewTime.getMinutes()
      return Year + '-' + Month + '-' + D + ' ' + H + ':' + M
    },
    async redConpon () {
      if (this.userUseRedEvnelope) {
        this.availableRedComponList = this.userUseRedEvnelope
      } else {
        const res = await getAvailableRedCompon()
        this.getUserUseRedEvnelope(res.data)
        this.availableRedComponList = this.userUseRedEvnelope
      }
    },
    // 接收子组件传递过来的参数
    getredEvnelopeId (val) {
      // console.log(val)
      this.checkedRedEvnelope = val
      this.checkedShopSunPrice += this.FrontRedEvnelopePrice
      this.checkedShopSunPrice -= val.price
      this.isDiscount = true
      this.FrontRedEvnelopePrice = val.price
      this.show = false
    },
    // 计算商品的总价钱
    sunPrice () {
      this.userCheckedShop.forEach(element => {
        // console.log(element)
        // eslint-disable-next-line no-const-assign
        this.checkedShopSunPrice += element.__v * element.specfoods[0].price
      })
      this.checkedShopList = this.userCheckedShop
    }
  },
  created () {
    this.sunPrice()
    // this.checkedShopList = this.userCheckedShop
    this.redConpon()
    // console.log(this.userCheckedShop)
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
    padding-bottom: 2.6667rem;
    .head{
      position: relative;
      height: 2.6667rem;
      line-height: 2.6667rem;
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
      padding-top: 1.2rem;
      .Address{
        height: .9067rem;
        line-height: .9067rem;
        font-size: .9067rem;
        padding-left: .6667rem;
        margin-bottom: .5333rem;
      }
      .userAbout{
        height: .6933rem;
        line-height: .6933rem;
        font-size: .6933rem;
        padding-left: .6667rem;
        color: #909090;
        margin-bottom: 1.2rem;
      }
      .delivey{
        position: relative;
        padding: 0 .64rem;
        line-height: .64rem;
        font-size: .64rem;
        margin-bottom: 1.2rem;
        .deliveyTime{
          position: absolute;
          right: .6667rem;
          top: 50%;
          transform: translateY(-50%);
          color: #3DB6E1;
        }
      }
      .fayWay{
        position: relative;
        padding: 0 .64rem;
        line-height: .64rem;
        font-size: .64rem;
        .fay{
          position: absolute;
          right: .6667rem;
          top: 50%;
          transform: translateY(-50%);
          color: #3DB6E1;
        }
      }
    }
    .userPhone{
      display: flex;
      flex-direction: column;
      // align-content: center;
      justify-content: center;
      flex-direction: center;
      height: 3.8667rem;
      background-color: white;
      width: 18.8rem;
      margin:0 auto .2667rem;
      border-radius: .5333rem;
      padding: 0 .6667rem;
      .Phone{
        position: relative;
        height: .64rem;
        line-height: .64rem;
        font-size: .64rem;
        margin-bottom: .5333rem;
        > span{
          position: absolute;
          right: 0;
          color: #3DB6E1;
        }
      }
      .encryption{
        line-height: .64rem;
        height: .64rem;
        font-size: .64rem;
        color: #777;
      }
    }
    .shopAbout{
      padding: .9333rem .6667rem;
      width: 18.8rem;
      background-color: white;
      margin: auto;
      // height: 200px;
      border-radius: .5333rem;
      .shoppingName{
        height: .7467rem;
        line-height: .7467rem;
        font-size: .7467rem;
        color: #929292;
        margin-bottom: .8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .delivery{
        position: relative;
        height: .8rem;
        font-size: .8rem;
        line-height: .8rem;
        margin-top: .8rem;
        .useRedConpon{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          font-size: .64rem;
          color: #777;
          // line-height: ;
          > span {
            font-size: .64rem;
          }
        }
      }
    }
    .settlementMoney{
      position: fixed;
      display: flex;
      align-items: center;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 20rem;
      background-color: white;
      height: 2.5333rem;
      box-shadow: 0 0 .2667rem rgba(0,0,0,.2);
      .SunMoney{
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: center;
        width: 13.7333rem;
        height: 2.5333rem;
        padding-right: .5333rem;
        // background-color: red;
        .price{
          height: .96rem;
          line-height: .96rem;
          text-align: right;
          font-size: .64rem;
          color: #444;
          margin-bottom: .2667rem;
          .priceStyle{
            font-size: .96rem;
            font-weight: 600;
            color: #111;
          }
        }
        .discount{
          text-align: right;
          height: .64rem;
          line-height: .64rem;
          font-size: .64rem;
          color: #EE502E;
        }
        .Notdiscount{
          text-align: right;
          height: .64rem;
          line-height: .64rem;
          font-size: .64rem;
          color: #888;
        }
      }
      .settlement{
        height: 2.0533rem;
        width: 5.7333rem;
        background-color: #01B6FB;
        color: white;
        line-height: 2.0533rem;
        text-align: center;
        font-size: .7467rem;
        border-radius: 1.0667rem;
      }
    }
    .icon{
      float: left;
      height: .8rem;
      width: .8rem;
      background-color: #F94832;
      border-radius: .1867rem;
      color: white;
      font-size: .64rem;
      text-align: center;
      margin-right: .5333rem;
    }
    .UitpriceStyle{
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      font-size: .7467rem;
      > span{
        font-size: .5333rem;
      }
    }
    /deep/.van-action-sheet__header{
      font-size: .64rem;
    }
    .content{
      height: 60vh;
      padding: .8rem .6667rem;
      overflow-y: auto;
      // background-color: red;
    }
  }
</style>
