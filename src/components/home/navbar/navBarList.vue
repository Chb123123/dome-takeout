<template>
  <div class="box">
    <!-- <div class="navbarContainer">
    <div class="nav" v-for="item in navList" :key="item.id" @click="getNavId(item.id)">
      <img :src="'https://fuss10.elemecdn.com'+ item.image_url" alt="">
      <span class="navtitle">{{ item.title }}</span>
    </div>
  </div> -->
  <van-swipe class="my-swipe" indicator-color="white">
  <van-swipe-item  v-for="i in navList" :key="i.id">
    <div class="navbarContainer">
    <div class="nav" v-for="item in i" :key="item.id" @click="getNavId(item.id)">
      <img :src="'https://fuss10.elemecdn.com'+ item.image_url" alt="">
      <span class="navtitle">{{ item.title }}</span>
    </div>
  </div>
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    navList: {}
  },
  methods: {
    getNavId (id) {
      console.log(id)
    }
  }
}
</script>

<style lang="less" scoped>
  .box{
    padding-top: .5333rem;
    background-color: white;
    padding-bottom: .8rem;
    .navbarContainer{
    display: flex;
    flex-wrap: wrap;
    width: 18.8rem;
    height: 8rem;
    margin: auto;
    .nav{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 25%;
      height: 4rem;
      // flex: 0.25;
      // background-color: red;
      // border: 1px solid red;
      > img{
        width: 3.2rem;
        height: 2.9333rem;
      }
      .navtitle{
        font-size: .64rem;
        color: #1C1C1E;
      }
    }
  }
  }
</style>
