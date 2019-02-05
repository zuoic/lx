<template>
  <div>
    <h3>
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.mint-swipe{
    height: 200px;
}
</style>
