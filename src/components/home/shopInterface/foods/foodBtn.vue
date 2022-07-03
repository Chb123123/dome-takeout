<template>
  <div class="btnContainer">
    <span @click="lowerCount"><van-icon name="minus" /></span>
    <span>{{ num }}</span>
    <span @click="addCount"><van-icon name="plus" /></span>
  </div>
</template>

<script>
import Bus from '@/EventBus/EventBus'
export default {
  // data () {
  //   return {
  //     count: 0
  //   }
  // },
  props: {
    num: {
      default: 0
    },
    foodId: {}
  },
  methods: {
    addCount () {
      Bus.$emit('addCount', [1, this.foodId])
    },
    lowerCount () {
      Bus.$emit('addCount', [-1, this.foodId])
    }
  }
}
</script>

<style lang="less" scoped>
  .btnContainer{
    display: flex;
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
</style>
