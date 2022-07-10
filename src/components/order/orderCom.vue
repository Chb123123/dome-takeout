<template>
  <div class="orderContainer">
    <!-- <van-loading color="#1989fa" /> -->
    <div class="shopping">
      <div class="shoppingImg">
        <img :src="'https://elm.cangdu.org/img/'+shoppingImg" alt="">
      </div>
      <div class="shoppingname">{{ shoppingname }}</div>
      <div class="Orderstate">交易失败</div>
    </div>
    <div class="deliveryState">{{ TradingInformation }}</div>
    <div class="deliveryTime">{{ deliveryTime }}</div>
    <div class="shop">
      <div class="firstShopImg">
        <img :src="'https://elm.cangdu.org/img/'+shoppingImg" alt="">
      </div>
      <div class="orderAbout">
        {{ shop }}
      </div>
      <div class="price">
        <div class="shopPrice"><span class="priceStyle">&yen;</span>&nbsp;{{ price }}</div>
        <div class="shopCount">共{{ quantity }}件</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 商店图片
    shoppingImg: {},
    // 商店名称
    shoppingname: {},
    // 配送时间
    deliveryTime: {},
    // 订单状态
    orderState: {},
    // 商品
    shop: {},
    // 交易信息
    TradingInformation: {},
    // 商品价格
    shopPrice: {},
    // 商品数量
    quantity: {}
  },
  data () {
    return {
      price: 0
    }
  },
  created () {
    this.price = this.shopPrice * this.quantity
  }
}
</script>

<style lang="less" scoped>
  .orderContainer{
    margin: 0 auto .5333rem;
    width: 18.8rem;
    height: 7.8667rem;
    background-color: white;
    border-radius: .5333rem;
    padding: .6667rem;
    .shopping{
      position: relative;
      display: flex;
      height: 1.3333rem;
      margin-bottom: .2667rem;
      .shoppingImg{
        height: 1.3333rem;
        width: 1.3333rem;
        // background-color: red;
        border-radius: .2667rem;
        overflow: hidden;
        > img {
          width: 100%;
          height: 100%;
          // border-radius: .2667rem;
        }
      }
      .shoppingname{
        height: 1.3333rem;
        padding-left: .2667rem;
        line-height: 1.3333rem;
        font-size: .7467rem;
        color: #000;
        // font-weight: 600;
      }
      .Orderstate{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: .6933rem;
        color: #777;
      }
    }
    .deliveryState{
      // zoom: 1;
      height: .8533rem;
      line-height: .8533rem;
      font-size: .5867rem;
      padding: 0 .2667rem;
      color: white;
      background-color: #989898;
      // overflow: hidden;
      float: left;
      border-radius: .2133rem;
      // margin-bottom: .5333rem;
      // overflow: hidden;
      &::after{
        content: '';
        display: block;
        height: 0;
        clear: both;
        // visibility: hidden;
      }
      &::before{
        content: '';
        clear: both;
      }
    }
    .deliveryTime{
      float: left;
      height: .8533rem;
      line-height: .8533rem;
      font-size: .64rem;
      margin-left: .5333rem;
      color: #B0B0B0;
    }
    .shop{
      position: relative;
      display: flex;
      margin-top: 1.4667rem;
      height: 3.4667rem;
      // background-color: red;
      .firstShopImg{
        width: 3.4667rem;
        height: 3.4667rem;
        // background-color: red;
        border-radius: .5333rem;
        border: .0267rem solid #ccc;
        > img{
          width: 100%;
          height: 100%;
          border-radius: .5333rem;
        }
      }
      .orderAbout{
        width: 12rem;
        line-height: 3.4667rem;
        // background-color: red;
        padding-left: .4rem;
        font-size: .7467rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        height: 1.8667rem;
      }
      .shopPrice{
        font-size: .7467rem;
        color: #171717;
      }
      .shopCount{
        font-size: .5333rem;
        color: #B0B0B0;
      }
    }
    .priceStyle{
          font-size: .64rem;
        }
  }
</style>
