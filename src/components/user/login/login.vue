<template>
  <div class="loginContainer">
        <van-nav-bar
    title="登入"
    left-text="返回"
    left-arrow
    fixed
    z-index="999"
    :border="false"
    @click-left="onClickLeft"
    />
    <img :src="verificationCode.code" alt="">
  </div>
</template>

<script>
import { getverificationCode } from '@/api/user/login/getVerificationCode'
export default {
  name: 'userLogin',
  data () {
    return {
      // 验证码
      verificationCode: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back(-1)
    },
    async init () {
      const res = await getverificationCode()
      this.verificationCode = res.data
      console.log(res.data)
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="less" scoped>
  .loginContainer{
    max-width: 20rem;
    margin: auto;
    height: 100vh;
    padding-top: 1.3333rem;
    background-color: aliceblue;
  }
</style>
