<template>
  <div class="loginContainer">
        <van-nav-bar
    title="登入"
    left-arrow
    fixed
    z-index="999"
    :border="false"
    @click-left="onClickLeft"
    />
    <div class="userBox">
      <div class="username"><span>用户名:</span><input type="text" name="" id="" placeholder="输入用户名" v-model="username"></div>
      <div class="password"><span>输入密码:</span>
      <input type="password" name="" id="input" class="form-control" required="required" title="" placeholder="输入密码" v-model="passwd">
      </div>
      <div class="phone"><span>输入手机号: </span><input type="text" name="" id="" placeholder="输入手机号" v-model="phone"></div>
      <div class="UserverificationCode"><span>输入验证码:</span> <input type="text" name="" id="" placeholder="输入验证码" v-model="InpoutverificationCode"><div class="verificationCodeImg"><img :src="verificationCode.code" alt="图片加载失败"><div class="NotSee" @click="notSee"><div class="refresh"><van-icon name="replay" /></div><span>看不清</span><span>换一张</span></div></div></div>
      <button class="loginBtn" @click="loginBtn">登入</button>
    </div>
  <!-- <va-n-notice-bar
  wrapable
  text="当前程序中的数据全部都是虚拟的，登入的信息不需要填写真实的数据，填写的数据不会用于其他用途,注意api无法识别验证码"
/> -->
  <div class="information">
    <van-notice-bar mode="closeable" text="登录的信息无需真实，符合格式即可" />
  </div>
  </div>
</template>

<script>
import { loginApi } from '@/api/user/login/loginApi'
import { getverificationCode } from '@/api/user/login/getVerificationCode'
// import Toast from 'path/to/@vant/weapp/dist/toast/toast'
import { mapMutations } from 'vuex'
export default {
  name: 'userLogin',
  components: {},
  data () {
    return {
      // 验证码
      verificationCode: '',
      // 用户输入用户名
      username: 'admin',
      passwd: '123456',
      phone: '13782672367',
      // 验证码
      InpoutverificationCode: ''
    }
  },
  methods: {
    ...mapMutations(['getUserAbout']),
    onClickLeft () {
      this.$router.back(-1)
    },
    async init () {
      const res = await getverificationCode()
      this.verificationCode = res.data
      console.log(res.data)
    },
    // 点击登入按钮，前往用户首页
    async loginBtn () {
      if (this.username.length === 0 || this.passwd.length === 0 || this.InpoutverificationCode.length === 0) {
        alert('登入失败')
      } else {
        if (this.phone.length < 11) {
          alert('手机号码有误')
        } else {
          const res = await loginApi(this.username, this.passwd, this.InpoutverificationCode)
          console.log(res)
          this.$router.push('/user')
          const user = { username: this.username, passwd: this.passwd, InpoutverificationCode: this.InpoutverificationCode, phone: this.phone }
          this.getUserAbout(user)
        }
      }
      const userInfo = {
        username: this.username,
        passWord: this.passwd,
        price: 500
      }
      localStorage.setItem('elementUserInfo', JSON.stringify(userInfo))
    },
    // 点击换一张，重新请求验证码
    async notSee () {
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
    padding-top: 5.3333rem;
    background-color: aliceblue;
    /deep/.van-nav-bar__content{
      height: 1.3333rem;
      // font-size: ;
    }
    /deep/.van-nav-bar__title{
      font-size: .7467rem;
    }
    /deep/.van-nav-bar .van-icon{
      color: #111;
    }
    /deep/.van-nav-bar__arrow{
      font-size: .7467rem;
      margin-left: .1333rem;
    }
    .userBox{
      height: 13.3333rem;
      width: 18.8rem;
      margin: auto;
      border-radius: .5333rem;
      background-color: white;
      padding-top: 1.3333rem;
      padding-left: .6667rem;
      padding-right: .6667rem;
      font-size: .7467rem;
      span{
        display: block;
        width: 4rem;
        height: 1.6rem;
        text-align: right;
        // background-color: red;
        margin-right: .2667rem;
      }
      .username{
        display: flex;
        height: 1.6rem;
        // margin-top: 20px;
        // background-color: red;
        margin-bottom: .6667rem;
        line-height: 1.6rem;
        > input{
          flex: 1;
          margin-left: .2667rem;
          border: 0;
          border-bottom: .0267rem solid #ccc;
        }
      }
      .password{
        display: flex;
        height: 1.6rem;
        // margin-top: 20px;
        // background-color: red;
        margin-bottom: .6667rem;
        line-height: 1.6rem;
        > input{
          flex: 1;
          margin-left: .2667rem;
          border: 0;
          border-bottom: .0267rem solid #ccc;
        }
      }
      .phone{
        display: flex;
        height: 1.6rem;
        // margin-top: 20px;
        // background-color: red;
        margin-bottom: .6667rem;
        line-height: 1.6rem;
        > input{
          flex: 1;
          margin-left: .2667rem;
          border: 0;
          border-bottom: .0267rem solid #ccc;
        }
      }
      .UserverificationCode{
        display: flex;
        justify-content: space-between;
        height: 1.6rem;
        // margin-top: 20px;
        // background-color: red;
        margin-bottom: 1.2rem;
        line-height: 1.6rem;
        > input{
          width: 4rem;
          margin-left: .2667rem;
          // border: 0;
          border: .0267rem solid #ccc;
        }
        > .verificationCodeImg{
          position: relative;
          height: 1.6rem;
          // width: 450px;
          flex: 1;
          display: flex;
          // background-color: red;
          // margin-left: 100px;
          padding-left: .5333rem;
          .NotSee{
            position: relative;
            // position: absolute;
            // right: 0;
            // top: 0;
            // float: right;
            display: flex;
            flex-direction: column;
            width: 1.6rem;
            height: 1.6rem;
            font-size: .5333rem;
            line-height: .8rem;
            // background-color: blue;
            > span{
              // background-color: blue;
              list-style: .8rem;
            }
            .refresh{
              position: absolute;
              top: 50%;
              left: 1.4667rem;
              transform: translateY(-50%);
              font-size: .64rem;
            }
          }
        }
      }
      .loginBtn{
        display: block;
        height: 1.2rem;
        border: 0;
        width: 10.6667rem;
        margin: auto;
        background: -webkit-linear-gradient(left, #FE6D9C,#E927EE, #FED829);
        border-radius: .8rem;
        color: #fff;
        // box-shadow: 0 0 10px;
        box-shadow: 0 0 .2667rem rgba(0,0,0,0.3);
      }
    }
    .information{
      position: fixed;
      top: 1.2267rem;
      left: 50%;
      transform: translateX(-50%);
      width: 20rem;
      height: .8rem;
    }
  }
</style>
