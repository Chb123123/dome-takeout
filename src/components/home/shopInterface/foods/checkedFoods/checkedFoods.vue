<template>
  <div class="checkedFoodsContainer">
    <div class="foodImg">
      <img :src="'http://elm.cangdu.org/img/' + foodsImg" alt="暂无图片">
    </div>
    <div class="foodAbout">
      <div class="foodTitle">{{ title }}</div>
      <div class="price">￥{{ price }}</div>
      <div class="count">{{ count }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foodsImg: {},
    // 选中商品的价格
    price: {
      default: 0
    },
    // 选中商品的名称
    title: {},
    // 选中商品的数量
    count: {
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>
  .checkedFoodsContainer{
    margin: .2667rem auto 0;
    display: flex;
    width: 20rem;
    height: 3.4667rem;
    padding: 0 .5333rem;
    // border: 1px solid red;
    .foodImg{
      width: 3.4667rem;
      height: 3.4667rem;
      line-height: 3.4667rem;
      text-align: center;
      // background-color: red;
      border-radius: .2667rem;
      overflow: hidden;
      border: .0267rem solid #ccc;
      font-size: .64rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .foodAbout{
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: .5333rem;
      // background-color: blue;
      .foodTitle{
        height: .8rem;
        line-height: .8rem;
        font-size: .8rem;
      }
      .price{
        height: .7467rem;
        line-height: .7467rem;
        font-size: .7467rem;
        color: #D66E56;
      }
      .count{
        position: absolute;
        right: .2667rem;
        bottom: 0;
        width: .8rem;
        height: .5333rem;
        line-height: .5333rem;
        padding: .0533rem .1333rem;
        // background-color: #0BB7F7;
        box-sizing: content-box;
        text-align: center;
        font-size: .5333rem;
        color: #000;
        // background-color: red;
      }
    }
  }
</style>
