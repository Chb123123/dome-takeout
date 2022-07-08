<template>
  <div class="userAboutContainer">
    <div class="userintroduce">
      <div class="useravatar"></div>
      <div class="username">123</div>
    </div>
    <!-- 用户资产 -->
    <div class="userassets">
      <div class="myassets">我的资产</div>
      <div class="voucher">
        <div class="RedEnvelope">
          <div class="RedEnvelopeTop"><span style="color: #F74E44;"><van-icon name="coupon" /></span> 红包/神券</div>
          <div class="RedEnvelopeBottom"><span>10</span>个未使用</div>
        </div>
        <div class="RedEnvelope">
          <div class="RedEnvelopeTop"><span style="color:#FEA238;"><van-icon name="gold-coin" /></span> 代金券</div>
          <div class="RedEnvelopeBottom"><span>0</span>张未使用</div>
        </div>
        <div class="RedEnvelope">
          <div class="RedEnvelopeTop"><span style="color: #FB7A3C;"><van-icon name="send-gift" /></span> 立减金</div>
          <div class="RedEnvelopeBottom">暂无</div>
        </div>
      </div>
    </div>
    <div class="collect">
      <div class="collectTitle">我的收藏</div>
      <div class="collectintroduce">暂无收藏,添加收藏更快找到你的菜~</div>
    </div>
    <div class="userwallet">
      <div class="myWallet">我的钱包</div>
      <div class="myPrice">0.00</div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// 导航栏组件
import Tabbar from '../utils/tabbar.vue'
export default {
  components: {
    Tabbar
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
        background-color: red;
        margin-right: .5333rem;
        border-radius: 50%;
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
        padding-left: .6667rem;
        height: .8533rem;
        line-height: .8533rem;
        font-size: .8533rem;
      }
    }
  }
</style>
