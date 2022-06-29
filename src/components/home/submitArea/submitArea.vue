<template>
  <div class="addressContainer">
    <van-nav-bar
  title="选择收货地址"
  left-text="返回"
  left-arrow
  fixed
  @click-left="onClickLeft"
/>
  <div class="submitAddress">
    <div class="submit">
      <div class="address" @click.stop="renewAddress">{{ $store.state.addressDetails.name }}<span class="move"></span>
      </div>
      <input type="text" name="" id="" class="inputAddress" placeholder="输入你的收货地址" v-model="address">
    </div>
  </div>
  <div class="recommendlist" v-if="addressList.length > 0">
    <div class="recommend" v-for="item in addressList" :key="item.id" @click="getDetailedAddress(item)">
      <span class="title">{{ item.name }}</span>
      <span class="detailedAddress">{{ item.address }}</span>
    </div>
  </div>
  </div>
</template>

<script>
// 输入收货地址，获取相关推荐
import { getAddressDetails } from '@/api/home/positionCity/addressDetailsAPI'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      address: '',
      flag: null,
      // 推荐搜索
      addressList: []
    }
  },
  computed: {
    ...mapState(['addressDetails'])
  },
  methods: {
    ...mapMutations(['newAddress', 'getdetailedAddress']),
    onClickLeft () {
      this.$router.back(-1)
    },
    renewAddress () {
      this.$router.push('/positioncity')
    },
    // 点击搜索推荐地点，获取详情维度
    getDetailedAddress (objsec) {
      console.log(objsec)
      this.getdetailedAddress(objsec)
    }
  },
  watch: {
    address () {
      if (this.flag) {
        clearTimeout(this.flag)
      }
      this.flag = setTimeout(async () => {
        const res = await getAddressDetails(this.$store.state.addressDetails.id, this.address)
        console.log(res)
        this.addressList = res.data
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
  .addressContainer{
    // padding-top: 2.6667rem;
    .submitAddress{
    margin-top: 2.1333rem;
    height: 2rem;
    // border: 1px solid red;
    .submit{
      position: relative;
      width: 18.8rem;
      height: 2rem;
      background-color: #F6F6F6;
      margin: auto;
      border-radius: 1.3333rem;
      .address{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: .8rem;
      }
      .move{
          display: inline-block;
          width: 0;
          height: 0;
          border-left: .2667rem solid #888;
          border-top: .2667rem solid #888;
          border-right: .2667rem solid transparent;
          border-bottom: .2667rem solid transparent;
          transform: rotateZ(225deg);
          margin-bottom: .1333rem;
          margin-left: .2667rem;
        }
        .inputAddress{
          position: absolute;
          left: 4rem;
          width: 13.3333rem;
          top: 50%;
          transform: translateY(-50%);
          height: .9333rem;
          background-color: #F6F6F6;
          border: 0;
          border-left: 1px solid #ccc;
          padding-left: .5333rem;
          z-index: 9999;
      }
    }
  }
  .recommendlist{
    padding: 0 .6667rem;
    .recommend{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 18.6667rem;
      height: 3.7333rem;
      padding: .8rem 0;
      border-bottom: .0267rem solid #eee;
      .title{
        height: .8rem;
        line-height: .8rem;
        font-size: .8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .detailedAddress{
        height: .64rem;
        line-height: .64rem;
        font-size: .64rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #666;
      }
    }
  }
  }
</style>
