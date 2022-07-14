<template>
  <div class="userAboutContainer">
    <div class="userintroduce">
      <div v-if="userAbout" class="useravatar" @click="successLogin">已登录</div>
      <div v-else class="useravatar" @click="gotoLogin">未登录</div>
      <div v-if="userAbout" class="username">{{ userAbout.username }}</div>
      <div v-else class="username">sd846728346238</div>
    </div>
    <!-- 用户资产 -->
    <div class="userassets">
      <div class="myassets">我的资产</div>
      <div class="voucher">
        <div class="RedEnvelope" @click="gotoRedEnvelope">
          <div class="RedEnvelopeTop"><span style="color: #F74E44;"><van-icon name="coupon" /></span> 红包/神券</div>
          <div class="RedEnvelopeBottom"><span v-if="userUseRedEvnelope">{{ userUseRedEvnelope.length }}</span><span v-else>3</span>个未使用</div>
        </div>
        <div class="RedEnvelope" @click="show">
          <div class="RedEnvelopeTop"><span style="color:#FEA238;"><van-icon name="gold-coin" /></span> 代金券</div>
          <div class="RedEnvelopeBottom"><span>0</span>张未使用</div>
        </div>
        <div class="RedEnvelope" @click="show">
          <div class="RedEnvelopeTop"><span style="color: #FB7A3C;"><van-icon name="send-gift" /></span> 立减金</div>
          <div class="RedEnvelopeBottom">暂无</div>
        </div>
      </div>
    </div>
    <!-- 用户余额 -->
    <div class="balance">
      <div class="headbalance">账户余额</div>
      <div v-if="userAbout" class="balancePrice"><span>￥</span>{{ userBalance }}</div>
      <div v-else class="notLogin">请登入</div>
    </div>
    <div class="collect" @click="show">
      <div class="collectTitle">我的收藏</div>
      <div class="collectintroduce">暂无收藏,添加收藏更快找到你的菜~</div>
    </div>
    <div class="userwallet"  @click="show">
      <div class="myWallet">我的钱包</div>
      <div class="myPrice">
        <div class="price">
          <div class="priceNum">5000<span style="font-size: 0.565rem; margin-left: 0.266rem;">元</span></div>
          <div class="borrowMoney">美团借钱</div>
          <div class="AboutMoney">大约可借</div>
        </div>
        <div class="price">
          <div class="priceNum">1<span style="font-size: 0.565rem; margin-left: 0.266rem;">次</span></div>
          <div class="borrowMoney">霸王餐</div>
          <div class="AboutMoney">近期申卡奖励</div>
        </div>
        <div class="price">
          <div class="priceNum">1<span style="font-size: 0.565rem; margin-left: 0.266rem;">张</span></div>
          <div class="borrowMoney">外卖神券</div>
          <div class="AboutMoney">今日可领</div>
        </div>
        <div class="price">
          <div class="priceNum">9.58<span style="font-size: 0.565rem; margin-left: 0.266rem;">元</span></div>
          <div class="borrowMoney">我的账单</div>
          <div class="AboutMoney">最近支付</div>
        </div>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Notify, Dialog, Toast } from 'vant'
// 导航栏组件
import Tabbar from '../utils/tabbar.vue'
export default {
  components: {
    Tabbar,
    [Notify.Component.name]: Notify.Component
  },
  computed: {
    ...mapState(['userAbout', 'userUseRedEvnelope', 'userBalance'])
  },
  methods: {
    successLogin () {
      Toast.success('已登录')
    },
    gotoLogin () {
      this.$router.push('/login')
    },
    show () {
      Notify({
        background: '#1989FA',
        message: '暂无功能',
        duration: 1000
      })
    },
    // 点击红包模块，前往红包模块
    gotoRedEnvelope () {
      if (this.userAbout) {
        this.$router.push('/redEnvelope')
      } else {
        Dialog.confirm({
          // title: '标题',
          message: '账号未登入'
        })
          .then(() => {
            // on confirm
            this.$router.push('/login')
          })
          .catch(() => {
            // on cancel
          })
        // Dialog({ message: '提示' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .userAboutContainer{
    max-width: 20rem;
    height: 100vh;
    background-color: #eee;
    margin: auto;
    padding-top: .5333rem;
    padding-bottom: 1.6rem;
    // 用户头像
    .userintroduce{
      display: flex;
      height: 2.6667rem;
      padding: 0 .6667rem;
      margin-bottom: 30px;
      .useravatar{
        width: 2.6667rem;
        height: 2.6667rem;
        line-height: 2.6667rem;
        // background-color: red;
        margin-right: .5333rem;
        border-radius: 50%;
        font-size: .64rem;
        text-align: center;
        background-color: white;
        color: #666;
        border: .0533rem solid white;
      }
      .username{
        flex: 1;
        font-size: .8533rem;
        line-height: 2.6667rem;
      }
    }
    .userassets{
      width: 18.8rem;
      margin: auto;
      height: 5.7333rem;
      border-radius: .5333rem;
      background-color: white;
      padding-top: .9333rem;
      margin-bottom: .5333rem;
      .myassets{
        height: .7467rem;
        font-size: .7467rem;
        line-height: .7467rem;
        padding-left: .6667rem;
        margin-bottom: .9333rem;
      }
      .voucher{
        display: flex;
        height: 2.1333rem;
        // background-color: red;
        > .RedEnvelope{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 2.1333rem;
          // background-color: blue;
          text-align: center;
          .RedEnvelopeTop{
            height: .8rem;
            line-height: .8rem;
            font-size: .8rem;
          }
          .RedEnvelopeBottom{
            height: .7467rem;
            line-height: .7467rem;
            font-size: .64rem;
            color: #808080;
            > span{
              font-size: .7467rem;
              color: #E49181;
            }
          }
        }
      }
    }
    .balance{
      height: 5.3333rem;
      width: 18.8rem;
      background-color: white;
      border-radius: .5333rem;
      padding-top: .9333rem;
      padding-left: .6667rem;
      margin: 0 auto .5333rem;
      .headbalance{
        height: .7467rem;
        line-height: .7467rem;
        font-size: .7467rem;
        margin-bottom: 1.0667rem;
      }
      .balancePrice{
          height: 1.0667rem;
          line-height: 1.0667rem;
          font-size: 1.12rem;
          > span {
            font-size: .64rem;
          }
        }
        .notLogin{
          font-size: .64rem;
          color: #666;
        }
    }
    .collect{
      height: 4.8rem;
      max-width: 18.8rem;
      margin: 0 auto .6667rem;
      background-color: white;
      border-radius: .5333rem;
      padding-top: .9333rem;
      .collectTitle{
        height: .7467rem;
        line-height: .7467rem;
        font-size: .7467rem;
        padding-left: .6667rem;
        margin-bottom: .9333rem;
      }
      .collectintroduce{
        height: .64rem;
        padding-left: .6667rem;
        line-height: .64rem;
        font-size: .64rem;
        color: #808080;
      }
    }
    .userwallet{
      margin: auto;
      max-width: 20rem;
      background-color: white;
      width: 18.8rem;
      height: 6.6667rem;
      border-radius: .5333rem;
      padding-top: .7467rem;
      .myWallet{
        height: .7467rem;
        line-height: .7467rem;
        padding-left: .6667rem;
        font-size: .7467rem;
        margin-bottom: 1.4667rem;
      }
      .myPrice{
        display: flex;
        // padding-left: .6667rem;
        height: 3.0667rem;
        // line-height: .8533rem;
        font-size: .8533rem;
        // background-color: red;
        .price{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          // background-color: blue;
          // border: 1px solid red;
          text-align: center;
          .priceNum{
            height: .8rem;
            line-height: .8rem;
            font-size: .96rem;
            // font-size: 600;
            vertical-align: middle;
            // background-color: red;
          }
          .borrowMoney{
            height: .64rem;
            line-height: .64rem;
            font-size: .64rem;
            color: #0D0D0D;
          }
          .AboutMoney{
            height: .5867rem;
            font-size: .5867rem;
            line-height: .5867rem;
            color: #B0B0B0;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
