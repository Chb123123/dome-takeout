<template>
  <div class="foodsContainer">
    <div class="head">
      {{ foodList.description }}
    </div>
    <div class="food" v-for="(item) in foodList.foods" :key="item.id">
      <div class="foodImg">
        <img v-if="item.image_path" :src="'http://elm.cangdu.org/img/' + item.image_path" alt="">
        <img v-else src="@/assets/noImg.jpg" alt="">
      </div>
      <div class="foodAbout">
        <div class="foodname">{{ item.specfoods[0].name }}</div>
        <div class="foodtitle">评分{{ item.specfoods[0].recent_rating }}</div>
        <div class="sellNum">{{ item.tips }}</div>
        <div class="money">{{item.specfoods[0].price}}￥</div>
        <BtnCount :num="item.__v" :foodId="item._id"></BtnCount>
      </div>
      <!-- <Food :foodList="foodList"></Food> -->
    </div>
  </div>
</template>

<script>
import BtnCount from './foodBtn.vue'
export default {
  name: 'foodList',
  components: {
    // Food
    BtnCount
  },
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
    width: 15.7333rem;
    // height: 200px;
    float: left;
    margin-left: 3.8667rem;
    // border: .0267rem solid red;
    overflow-X: auto;
    overflow-Y: auto;
    .head{
      padding: .8rem .6667rem;
      font-size: .64rem;
    }
    .food{
      display: flex;
      width: 15.7333rem;
      height: 5.7333rem;
      // border: .0267rem solid red;
      padding: 0.4rem .6667rem;
      font-size: .64rem;
      .foodImg{
        width: 4.9333rem;
        height: 4.9333rem;
        // background-color: red;
        // margin-right: .5333rem;
        border: 1px solid #BEC0C2;
        border-radius: .2667rem;
        overflow: hidden;
        > img{
          width: 100%;
          height: 100%;
          // border-radius: .2667rem;
        }
      }
      .foodAbout{
        position: relative;
        width: 9.7333rem;
        height: 4.9333rem;
        // border: .0267rem solid red;
        padding-left: .5333rem;
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
          left: .5333rem;
          font-size: .7467rem;
          color: red;
        }
        .foodCount{
          position: absolute;
          bottom: 0;
          display: flex;
          right: 0;
          width: 4rem;
          height: 1.0667rem;
          line-height: 1.0667rem;
          text-align: center;
          color: white;
          border-radius: .9067rem;
          background-color: #0EAFEE;
          > span{
            flex: 1;
            // background-color: red;
            border-radius: 50%;
            font-size: .64rem;
            text-align: center;
            // background-color: #ccc;
          }
        }
      }
    }
  }
</style>
