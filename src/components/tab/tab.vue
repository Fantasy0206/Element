<template>
  <div class="tab">
    <div class="tab-item">
      <router-link to= "/goods">商品</router-link>
      </div>
    <div class="tab-item">
      <router-link to= "/ratings">评论</router-link>
      </div>
    <div class="tab-item">
      <router-link to= "/sellers">商家</router-link>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    sellers: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  position: relative;
  font-size:14px;
  color: rgb(77, 85, 93)
}

.active{
  color: rgb(240, 20, 20);
}
.tab .tab-item{
  flex:1;
  text-align: center;
}
</style>
