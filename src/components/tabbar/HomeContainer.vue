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
export default {
  data(){
    return {}
  },
  created(){
    this.getLunbotu()
  },
  methods: {
    getLunbotu(){
      //获取轮播图数据的方法
      this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
        console.log(result.body)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mint-swipe{
    height: 200px;
}
</style>
