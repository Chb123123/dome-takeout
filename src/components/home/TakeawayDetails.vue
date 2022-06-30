<template>
  <div class="takewayContainer" @click="getRestaurantId">
    <div class="takeawayImg">
      <img :src="'http://elm.cangdu.org/img/'+ takeawayImg" alt="">
    </div>
    <div class="takeawayAbout">
      <div class="takeawaytitle">{{ takeawayTitle }}
      </div>
      <div class="takeawayFraction">{{ score }}分
        <div class="delivery">{{ distance }}&nbsp;{{ deliveryTime }}</div>
      </div>
      <div class="delivery">起送￥15</div>
      <div class="Evaluation">
        <div class="Evaluation1">热情掌柜</div>
      </div>
      <div class="discount">
        <div v-if="discount[0]" class="support" :style="'color:#' + discount[0].icon_color">{{ discount[0].name }}</div>
        <div v-if="discount[1]" class="support" :style="'color:#' + discount[1].icon_color" >{{ discount[1].name }}</div>
        <div v-if="discount[2]" class="support" :style="'color:#' + discount[2].icon_color" >{{ discount[2].name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    // 商店名称
    takeawayTitle: {},
    // 商店图片
    takeawayImg: {},
    // 商店评分
    score: {},
    // 配送时间
    deliveryTime: {},
    // 配送里程
    distance: {},
    // 优惠活动
    discount: {},
    // 餐馆id
    restaurant: {}
  },
  methods: {
    ...mapMutations(['getshopid']),
    getRestaurantId () {
      this.getshopid(this.restaurant)
      // console.log(this.restaurantId)
      this.$router.push('/shopInterface')
    }
  }
}
</script>

<style lang="less" scoped>
  .takewayContainer{
    margin: .2667rem auto 0;
    width: 18.8rem;
    height: 6.6667rem;
    background-color: white;
    box-sizing: border-box;
    padding: .6667rem .5333rem;
    border-radius: .5333rem;
    .takeawayImg{
      float: left;
      width: 5.4667rem;
      height: 5.4667rem;
      // background-color: blue;
      > img{
        width: 100%;
        height: 100%;
        border-radius: .5333rem;
      }
    }
    .takeawayAbout{
      width: 12.1333rem;
      height: 5.4667rem;
      float: left;
      // background-color: red;
      padding-left: .4rem;
      .takeawaytitle{
        margin-top: .2667rem;
        height: .8rem;
        font-size: .7467rem;
        line-height: .8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .takeawayFraction{
        position: relative;
        margin-top: .2667rem;
        height: .6667rem;
        font-size: .64rem;
        line-height: .6667rem;
        color: #888;
        .delivery{
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      .delivery{
        margin-top: .2667rem;
        height: .6667rem;
        font-size: .64rem;
        line-height: .6667rem;
        color: #888;
      }
      .Evaluation{
        margin-top: .2667rem;
        height: 1.0667rem;
        font-size: .5333rem;
        line-height: 1.0667rem;
        // color: #CF7227;
        // background-color: #FFF0DF;
        .Evaluation1{
          display: inline-block;
          padding: 0 0.2667rem;
          color: #CF7227;
          border-radius: .1867rem;
          background-color: #FFF0DF;
          box-sizing: border-box;
        }
      }
      .discount{
        display: flex;
        margin-top: .2667rem;
        height: .8rem;
        line-height: .8rem;
        font-size: .64rem;
        color: red;
        .support{
          margin-right: .2667rem;
          border: .0267rem solid #ccc;
          padding: .08rem .16rem;
          border-radius: .2667rem;
          box-sizing: content-box;
          line-height: .5333rem;
        }
      }
    }
  }
</style>
