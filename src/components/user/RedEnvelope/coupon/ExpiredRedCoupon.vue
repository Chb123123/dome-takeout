<template>
  <div class="componContainer">
    <div class="redcomponName">
      <span><van-icon name="fire" /></span>
      {{ RedConponName }}
    </div>
    <div class="redComponBox">
      <div class="redComponintroduce">
        <div class="Highest">{{ online_paid_only }}
          <div class="HighestLower"><span>￥</span>{{ availPrice }}</div>
        </div>
        <div class="ValidityPeriod">
          <div class="ValidityPeriodTime">有效期：{{availableRedComponTime  }}</div>
          <div class="fullReduction">{{ sum_condition }}</div>
        </div>
      </div>
      <div class="InstructionsForUse">
        <div class="inforTitle">
          {{ limited }}
        </div>
        <!-- <div class="goToUse" @click="gotoHome">去使用</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 红包类型
    RedConponName: {},
    phone: {},
    // 红包可用期限
    availableRedComponTime: {},
    // 红包金额
    availPrice: {},
    // 限条件
    limited: {},
    // 金额限定
    sum_condition: {},
    // 使用条件
    online_paid_only: {}
  },
  methods: {
    gotoHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
  .componContainer{
    position: relative;
    width: 18.8rem;
    height: 6.9333rem;
    margin: auto;
    background-color: #FDF1C1;
    border-radius: .8rem;
    margin-top: .2667rem;
    overflow: hidden;
    opacity: 0.5;
    &::after{
      content: '已失效';
      position: absolute;
      font-size: .8533rem;
      line-height: 3.2rem;
      text-align: center;
      color: #D4BF92;
      width: 3.2rem;
      height: 3.2rem;
      bottom: -0.16rem;
      right: -0.2667rem;
      border: .1333rem solid #D4BF92;
      border-radius: 50%;
      transform: rotateZ(-35deg);
      // background-color: rgba(0,0,0,0.4);
    }
    .redcomponName{
      position: absolute;
      top: 0;
      left: 0;
      width: 5.3333rem;
      height: .96rem;
      line-height: .96rem;
      font-size: .5867rem;
      background-color: #FED637;
      border-radius: 0 0 .8rem;
      // text-align: center;
      > span{
        display: block;
        float: left;
        width: 1.4667rem;
        height: .96rem;
        line-height: .96rem;
        text-align: center;
        color: white;
        background-color: #FDBA21;
        margin-right: .2667rem;
        border-radius: 0 0 .8rem;
      }
    }
    .redComponBox{
      display: flex;
      flex-direction: column;
      padding: 0 .6667rem;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      width: 18.8rem;
      height: 5.9733rem;
      // background-color: red;
      .redComponintroduce{
        flex: 1;
        // background-color: red;
        padding-top: .6667rem;
        .Highest{
          position: relative;
          height: .8533rem;
          line-height: .8533rem;
          font-size: .8533rem;
          margin-bottom: .5333rem;
          .HighestLower{
            position: absolute;
            right: 0;
            top: 50%;
            color: #FF4727;
            font-size: 1.44rem;
            transform: translateY(-50%);
            // background-color: red;
            > span{
              font-size: .64rem;
            }
          }
        }
        .ValidityPeriod{
          display: flex;
          height: .5867rem;
          line-height: .5867rem;
          font-size: .5867rem;
          .ValidityPeriodTime{
            width: 13.3333rem;
            color: #7B7863;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .fullReduction{
            flex: 1;
            color: #CA542B;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
      .InstructionsForUse{
        position: relative;
        height: 2.3467rem;
        line-height: 2.3467rem;
        font-size: .5333rem;
        color: #6A6755;
        border-top: .0267rem dashed #000;
        .inforTitle{
          width: 10.6667rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .goToUse{
          position: absolute;
          width: 3.0667rem;
          height: 1.3333rem;
          line-height: 1.3333rem;
          text-align: center;
          // background-color: #FE6C17;
          background: -webkit-linear-gradient(left, #FF6F14, #FD3F5C);
          right: 0;
          top: 50%;
          color: white;
          border-radius: .2667rem;
          transform: translateY(-50%);
          //
        }
      }
    }
  }
</style>
