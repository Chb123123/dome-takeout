<template>
  <div>
    <div class="food" v-for="(item) in foodList.foods" :key="item.id">
      <div class="foodImg">
        <img :src="'http://elm.cangdu.org/img/' + item.image_path" alt="">
      </div>
      <div class="foodAbout">
        <div class="foodname">{{ item.specfoods[0].name }}</div>
        <div class="foodtitle">评分:{{ item.specfoods[0].recent_rating }}分</div>
        <div class="sellNum">{{ item.tips }}</div>
        <div class="money">{{item.specfoods[0].price}}￥</div>
        <div class="foodCount"><span @click="lowerShop(item)">-</span><span v-if="item.count">{{item.count}}</span><span v-else>0</span><span @click="addShop(item)">+</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'myFood',
  props: {
    foodList: {}
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    ...mapMutations(['getshoppingCart']),
    // 点击减少，商品列表的数量减少
    lowerShop (item) {
      if (item.count || item.count > 0) {
        item.count--
        console.log(item)
        this.getshoppingCart(item)
      }
    },
    // 点击增加，商品的数量增加，并将增加的商品添加到购物车
    addShop (item) {
      if (item.count) {
        item.count++
        console.log(item)
        this.getshoppingCart(item)
      } else {
        item.count = 1
        console.log(item)
        this.getshoppingCart(item)
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
        > img{
          width: 100%;
          height: 100%;
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
</style>
