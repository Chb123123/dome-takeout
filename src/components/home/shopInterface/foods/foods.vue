<template>
  <div class="foodsContainer">
    <div class="head">
      热销
    </div>
    <div class="food">
      <div class="foodImg"></div>
      <div class="foodAbout">
        <div class="foodname">123</div>
        <div class="foodtitle">123</div>
        <div class="sellNum">123</div>
        <div class="money">123$</div>
        <div class="foodCount"><van-stepper v-model="value" input-width="1.6rem" button-size=".9067rem" min='0'/></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foodList',
  props: {
    foodList: {}
  },
  data () {
    return {
      value: 0
    }
  }
}
</script>

<style lang="less" scoped>
  .foodsContainer{
    width: 590px;
    // height: 200px;
    float: left;
    border: 1px solid red;
    .head{
      padding: .8rem .6667rem;
    }
    .food{
      display: flex;
      width: 15.7333rem;
      height: 5.7333rem;
      border: 1px solid red;
      padding: 0.4rem .6667rem;
      .foodImg{
        width: 4.9333rem;
        height: 4.9333rem;
        background-color: red;
        // margin-right: .5333rem;
      }
      .foodAbout{
        position: relative;
        width: 365px;
        height: 185px;
        border: 1px solid red;
        padding-left: 20px;
        // margin-left: .5333rem;
        .foodname{
          height: .8rem;
          line-height: .8rem;
          font-size: .8rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: .4rem;
        }
        .foodtitle{
          height: .64rem;
          line-height: .64rem;
          font-size: .64rem;
          color: #666;
          margin-bottom: .2667rem;
        }
        .sellNum{
          height: .64rem;
          line-height: .64rem;
          font-size: .64rem;
          color: #666;
        }
        .money{
          position: absolute;
          bottom: 0;
          left: 20px;
          font-size: .7467rem;
          color: red;
        }
        .foodCount{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 150px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: white;
          // border-radius: .9067rem;
          // background-color: #0EAFEE;
        }
      }
    }
  }
</style>
