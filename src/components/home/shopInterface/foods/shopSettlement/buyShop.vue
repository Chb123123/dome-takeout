<template>
  <div class="buyShopContainer">
    <div class="shopImg">
      <img :src="'http://elm.cangdu.org/img/' + shopImg" alt="">
    </div>
    <div class="shopAbout">
      <div class="foodName">{{ shopName }}
        <div class="unitPrice">￥<span>{{ shopPrice }}</span></div>
      </div>
      <div class="shopCount">X<span>{{ shopCount }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 商品图片
    shopImg: {},
    // 商品名称
    shopName: {},
    // 商品价格
    shopPrice: {},
    // 商品数量
    shopCount: {}
  }
}
</script>

<style lang="less" scoped>
  .buyShopContainer{
    display: flex;
    width: 100%;
    height: 2.6667rem;
    margin-bottom: .2667rem;
    // background-color: red;
    .shopImg{
      height: 2.6667rem;
      width: 2.6667rem;
      border-radius: .2667rem;
      // background-color: blue;
      > img{
        width: 100%;
        height: 100%;
        border-radius: .2667rem;
      }
    }
    .shopAbout{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // background-color: red;
      padding-left: .4rem;
      .foodName{
        position: relative;
        height: .9333rem;
        line-height: .9333rem;
        font-size: .64rem;
        .unitPrice{
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: .4267rem;
          > span{
            font-size: .64rem;
          }
        }
      }
      .shopCount{
        height: .48rem;
        font-size: .4267rem;
        line-height: .48rem;
        color: #979797;
        > span{
          font-size: .64rem;
        }
      }
    }
  }
</style>
