<template>
  <div class="commentContainer">
    <div class="userMove">
      <div class="useravatar">用户头像</div>
      <div class="userAbout">
        <div class="username">{{ username }}</div>
        <div class="userrelease">{{ userrelease }}</div>
      </div>
    </div>
    <div class="satisfaction">
      满意度 <van-rate v-model="value" size="0.64rem" color="#EC7818" void-icon="star" void-color="#eee" :readonly='true'/>
    </div>
    <div class="satisfaction">
      <span v-for="item in shopList" :key="item._id">{{ item.food_name }}</span>
    </div>
    <div v-if="userEvaluation !== ''" class="comment">{{ userEvaluation }}</div>
    <div v-else class="comment">用户未评价</div>
    <!-- 用户评论图片 -->
    <!-- <div class="shopImg">
      <img src="@/assets/1.jpg" alt="">
    </div> -->
    <!-- 点赞模块 -->
    <div v-if="classGood === false" class="nogood" @click="isGood"><van-icon name="good-job" /></div>
    <div v-else class="good"><van-icon name="good-job"  @click="isGood"/></div>
  </div>
</template>

<script>
export default {
  props: {
    // 用户满意程度
    count: {
      default: 4
    },
    // 用户头像
    useravatar: {},
    username: {},
    // 用户评价
    userEvaluation: {},
    // 发布时间
    userrelease: {},
    // 用户购买的商品列表
    shopList: {}
  },
  data () {
    return {
      value: 0,
      classGood: false
    }
  },
  methods: {
    isGood () {
      if (this.classGood) {
        this.classGood = false
      } else {
        this.classGood = true
      }
    }
  },
  watch: {
    count () {
      this.value = this.count
    }
  },
  created () {
    this.value = this.count
  }
}
</script>

<style lang="less" scoped>
  .commentContainer{
    position: relative;
    width: 18.8rem;
    // height: 8.4rem;
    margin: 0 auto .5333rem;
    padding-top: .8rem;
    padding-bottom: 1.0667rem;
    background-color: white;
    border-radius: .5333rem;
    .userMove{
      margin-bottom: .8rem;
      display: flex;
      height: 1.8667rem;
      padding-left: .6667rem;
      // background-color: red;
      .useravatar{
        width: 1.8667rem;
        height: 1.8667rem;
        border-radius: 50%;
        overflow: hidden;
        // background-color: blue;
        text-align: center;
        margin-right: .4rem;
        border: .0267rem solid #ccc;
        font-size: .64rem;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .userAbout{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // background-color: green;
        padding-right: .6667rem;
        .username{
          height: .7467rem;
          line-height: .7467rem;
          font-size: .7467rem;
        }
        .userrelease{
          height: .5333rem;
          font-size: .5333rem;
          color: #9B999A;
          line-height: .5333rem;
        }
      }
    }
    .satisfaction{
      height: .5867rem;
      line-height: .5867rem;
      font-size: .5867rem;
      color: #A5A5A5;
      padding: 0 .6667rem;
      margin-bottom: .6667rem;
      > span {
        margin-right: 10px;
      }
    }
    .comment{
      height: .7467rem;
      line-height: .7467rem;
      font-size: .7467rem;
      color: #3F3F3F;
      padding: 0 .6667rem;
      margin-bottom: .5333rem;
    }
    .shopImg{
      display: flex;
      overflow-x: auto;
      height: 150px;
      padding-left: .6667rem;
      // background-color: blue;
      > img{
        width: 4rem;
        height: 4rem;
        border-radius: .4rem;
        margin-right: .2667rem;
      }
    }
    .img{
      height: 200px;
      background-color: red;
    }
    .nogood{
      position: absolute;
      right: .6667rem;
      bottom: .2667rem;
      font-size: .64rem;
      color: #A5A5A5;
    }
    .good{
      position: absolute;
      right: .6667rem;
      bottom: .2667rem;
      font-size: .64rem;
      color: red;
    }
  }
</style>
