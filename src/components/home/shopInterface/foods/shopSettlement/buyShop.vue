<template>
  <div class="buyShopContainer">
    <div class="shopImg">
      i
    </div>
    <div class="shopAbout">
      <div class="foodName">窑鸡王
        <div class="unitPrice">￥<span>12</span></div>
      </div>
      <div class="shopCount">X<span>1</span></div>
    </div>
  </div>
</template>

<script>
export default {

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
