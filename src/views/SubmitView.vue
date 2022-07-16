<template>
  <div class="submitContainer">
    <div class="submitHead">
      <div class="leftBtn" @click="back"><van-icon name="arrow-left" /></div>
      <div class="submitInput"><input type="text" v-model="shopkeyword" placeholder="派乐堡炸鸡">
      <div class="submitIcon"><van-icon name="search" /></div>
      </div>
      <div class="submitBtn" @click="submitShopping">搜索</div>
    </div>
    <div class="box">
      <div class="historySubmit">历史搜索
        <div class="remove" @click="removeHistorySubmit"><van-icon name="delete-o" /></div>
      </div>
      <div class="history">
        <span v-for="(item, index) in historySubmit" :key="index">{{ item }}</span>
      </div>
      <div class="shoppingList" v-if="shopList.length > 0">
        <div class="shoppingrecommend" v-for="item in shopList" :key="item.id" @click="shopname(item.name)">
          <van-icon name="search" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { Dialog, Toast } from 'vant'
// 点击搜索列表，将点击的列表关键字保存到vuex
import { mapState, mapMutations } from 'vuex'
// 导入搜索商店组件
import { getSubmitShopping } from '@/api/submit/getShopping/getShoppingAPI'
// 导航栏组件
import Tabbar from '../utils/tabbar.vue'
export default {
  data () {
    return {
      // 搜索关键字
      shopkeyword: '',
      // 搜索店铺列表
      shopList: [],
      // 设置防抖
      flag: null
    }
  },
  components: {
    Tabbar,
    [Dialog.Component.name]: Dialog.Component
  },
  computed: {
    ...mapState(['addressDetails', 'historySubmit'])
  },
  methods: {
    ...mapMutations(['gethistorySubmit', 'clearhistorySubmit']),
    removeHistorySubmit () {
      Dialog.confirm({
        title: '是否清空历史记录'
      })
        .then(() => {
          this.clearhistorySubmit()
        })
        .catch(() => {
        })
    },
    // 点击搜索获取搜索关键字
    shopname (keyword) {
      console.log(keyword)
      this.shopkeyword = ''
      this.shopList = []
      this.gethistorySubmit(keyword)
    },
    back () {
      this.$router.back(-1)
    },
    submitShopping () {
      Toast.fail('暂无店铺信息')
    }
  },
  watch: {
    shopkeyword () {
      if (this.flag) {
        clearTimeout(this.flag)
      } else {
        if (this.shopkeyword !== '') {
          this.flag = setTimeout(async () => {
            const geohash = this.addressDetails.latitude + ',' + this.addressDetails.longitude
            // console.log(geohash)
            const res = await getSubmitShopping(geohash, this.shopkeyword)
            console.log(res)
            this.shopList = res.data
          }, 500)
        } else {
          this.shopList = []
        }
      }
    }
  },
  created () {
    // this.recommendShop()
    // console.log(this.addressDetails)
  }
}
</script>

<style lang="less" scoped>
  .submitContainer{
    margin: auto;
    background-color: #F6F6F6;
    padding-top: .5333rem;
    .submitHead{
      // margin-top: 20px;
      display: flex;
      height: 1.6rem;
      margin-bottom: .5333rem;
      .leftBtn{
        width: 2.2667rem;
        height: 1.6rem;
        font-size: .7467rem;
        text-align: center;
        line-height: 1.6rem;
      }
      .submitInput{
        position: relative;
        flex: 1;
        font-size: .64rem;
        // background-color: red;
        > input{
          height: 100%;
          width: 100%;
          border-radius: 1.3333rem;
          border: 0;
          padding-left: 1.8667rem;
          // font-size: .64rem;
        }
      }
      .submitIcon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: .8rem;
        font-size: .7467rem;
        color: #0BB7F7;
        // background-color: aqua;
      }
      .submitBtn{
        height: 1.6rem;
        width: 2.8rem;
        font-size: .64rem;
        line-height: 1.6rem;
        text-align: center;
      }
    }
    .box{
      position: relative;
      height: 100vh;
      background-color: white;
      border-radius: .8rem .8rem 0 0;
      padding-top: .5333rem;
      overflow: hidden;
      .historySubmit{
      position: relative;
      padding-left: .6667rem;
      height: .8rem;
      line-height: .8rem;
      font-size: .8rem;
      color: #010101;
      margin-bottom: .8rem;
      .remove{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: .6667rem;
        font-size: .8rem;
        color: #999999;
      }
    }
    .history{
      padding: 0 .6667rem;
      display: flex;
      flex-wrap: wrap;
      > span{
        padding: .2667rem .4rem;
        // background-color: red;
        font-size: .64rem;
        border-radius: .6667rem;
        background-color: #F6F6F6;
        margin-right: .5333rem;
        margin-bottom: .5333rem;
      }
    }
    .shoppingList{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
      }
      .shoppingrecommend{
        height: 2rem;
        padding: 0 .6667rem;
        line-height: 2rem;
        font-size: .7467rem;
        > span{
          margin-left: .4rem;
        }
      }
    }
  }
</style>
