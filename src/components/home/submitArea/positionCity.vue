<template>
  <div class="positionCityContainer">
    <van-nav-bar
  title="选择城市"
  left-arrow
  fixed
  @click-left="onClickLeft"
/>
  <a class="relatedAdress" v-for="(item, index) in cityList" :key="index" :href="'#'+index">
    {{ index }}
    <a v-for="i in item" :key="i.id" href="javascript:;" class="address" @click="addressBtn(i)">{{ i.name }}</a>
  </a>
  <div class="position">
    <span id="A" class="">S</span>
  </div>
  </div>
</template>

<script>
import { getPositionCity } from '@/api/home/positionCity/positionCityAPI'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      cityList: {}
    }
  },
  methods: {
    ...mapMutations(['newAddress']),
    onClickLeft () {
      this.$router.back(-1)
    },
    async positionCity () {
      const res = await getPositionCity()
      // console.log(res)
      this.cityList = res.data
      // for (const i in this.cityList) {
      //   console.log(this.cityList[i])
      // }
    },
    addressBtn (step) {
      // console.log(step)
      this.newAddress(step)
      this.$router.back(-1)
    }
  },
  created () {
    this.positionCity()
  }
}
</script>

<style lang="less" scoped>
  .positionCityContainer{
    padding-top: 1.6rem;
    padding-right: .5333rem;
    .relatedAdress{
      display: block;
      // height: .9333rem;
      line-height: .9333rem;
      font-size: .64rem;
      padding-left: .5333rem;
      // background-color: #eee;
      color: #000;
      .address{
        display: block;
        height: 1.0667rem;
        line-height: 1.0667rem;
        // padding-left: .5333rem;
        font-size: .5333rem;
        border-bottom: .0267rem solid #ccc;
        // border-left: .0267rem solid #ccc;
        // border-top: .0267rem solid #ccc;
        color: #000;
      }
    }
    .position{
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      z-index: 9999;
    }
  }
</style>
