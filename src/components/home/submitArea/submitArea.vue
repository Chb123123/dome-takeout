<template>
  <div>
    <van-nav-bar
  title="选择收货地址"
  left-text="返回"
  left-arrow
  fixed
  @click-left="onClickLeft"
/>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.back(-1)
    }
  }
}
</script>

<style>

</style>
