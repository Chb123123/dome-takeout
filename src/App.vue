<template>
  <div class="AppContainer">
    <keep-alive include="myHome, myCart">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .AppContainer{
    margin: auto;
  }
</style>
