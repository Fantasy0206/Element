<template>
  <div class="split">
    <span class="split-line"></span>
    <h2 class="split-title">{{ text }}</h2>
    <span class="split-line"></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    text: {
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.split{
  text-align: center;
}
.split .split-line{
  vertical-align: middle;
  font-size: 0px;
  display: inline-block;
  width: 112px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
}
.split .split-title{
  vertical-align: middle;
  margin: 0px 12px;
  font-size: 14px;
  font-weight: 350;
  color: rgb(255, 255, 255);
  line-height: 14px;
  display: inline-block;
  font-family: 黑体
}
</style>
