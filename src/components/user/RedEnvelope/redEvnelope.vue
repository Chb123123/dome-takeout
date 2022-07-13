<template>
  <div class="redEvnelopeContainer">
    <div class="head"><span class="back" @click="back"><van-icon name="arrow-left" /></span>获得红包</div>
    <RedConpon v-for="item in availableRedComponList" :key="item.id" :availableRedComponTime="item.end_date" :availPrice="item.amount" :online_paid_only="item.description_map.online_paid_only" :limited="item.description_map.phone" :RedConponName="item.name" :sum_condition="item.description_map.sum_condition"></RedConpon>
    <!-- 过期红包模块 -->
    <ExpiredRedCoupon v-for="item in expiredRedCoupon" :key="item.id" :availableRedComponTime="item.end_date" :availPrice="item.amount" :online_paid_only="item.description_map.online_paid_only" :limited="item.description_map.phone" :RedConponName="item.name" :sum_condition="item.description_map.sum_condition"></ExpiredRedCoupon>
  </div>
</template>

<script>
// 获取过期红包
import { getExpiredRedCompon } from '@/api/user/RedCompon/ExpiredRedConpon'
import { getAvailableRedCompon } from '@/api/user/RedCompon/availableRedCompon'
// 导入红包组件
import RedConpon from './coupon/redCoupon.vue'
import ExpiredRedCoupon from './coupon/ExpiredRedCoupon.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    RedConpon,
    ExpiredRedCoupon
  },
  computed: {
    ...mapState(['userUseRedEvnelope'])
  },
  data () {
    return {
      availableRedComponList: [],
      expiredRedCoupon: [],
      value1: 0,
      value2: 'a',
      option1: [
        { text: '可用红包', value: 0 },
        { text: '过期红包', value: 1 }
      ]
    }
  },
  methods: {
    ...mapMutations(['getUserUseRedEvnelope']),
    back () {
      this.$router.back(-1)
    },
    // 获取可用红包列表
    async redConpon () {
      if (this.userUseRedEvnelope) {
        this.expiredRedCoupon = this.userUseRedEvnelope
      } else {
        const res = await getAvailableRedCompon()
        this.getUserUseRedEvnelope(res.data)
        this.expiredRedCoupon = this.userUseRedEvnelope
        const res1 = await getExpiredRedCompon()
        this.expiredRedCoupon = res1.data
        // console.log(res1.data)
      }
    }
  },
  created () {
    this.redConpon()
  }
}
</script>

<style lang="less" scoped>
  .redEvnelopeContainer{
    max-width: 20rem;
    margin: auto;
    // height: 100vh;
    background-color: rgb(248,248,248);
    padding-top: 2.6667rem;
    .head{
      position: relative;
      height: 2.6667rem;
      line-height: 2.6667rem;
      background-color: white;
      width: 20rem;
      text-align: center;
      position: fixed;
      top: 0;
      left: 50%;
      font-size: .8533rem;
      transform: translateX(-50%);
      z-index: 999;
      .back{
        position: absolute;
        left: .5333rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1.6rem;
        // background-color: red;
      }
    }
  }
</style>
