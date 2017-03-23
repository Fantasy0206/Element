<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img v-bind:src="sellers.avatar" width='64' height='64' alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ sellers.name }}</span>
        </div>
        <div class="description">
          {{ sellers.description }}/{{ sellers.deliveryTime }}分钟送达
        </div>
        <div class="" v-if="sellers.supports" class="support">
          <span class="icon" v-bind:class="classType[sellers.supports[0].type]"></span>
          <span class="text">{{ sellers.supports[0].description }}</span>
        </div>
      </div>
      <div @click="showDetail" class="support-count" v-if="sellers.supports">
        <span class="count">{{ sellers.supports.length }}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div @click="showDetail" class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ sellers.bulletin }}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img v-bind:src="sellers.avatar" alt="" width="100%" height="100%">
    </div>
    <div class="detail" v-show = 'detailShow'>
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <!-- 店铺名称 -->
          <h1 class="name">{{ sellers.name }}</h1>
          <!-- 店铺评分 -->
          <star v-bind:size='48' v-bind:score='sellers.score'></star>
          <!-- 标题一 -->
          <split v-bind:text='msg[0]'></split>
          <!-- 优惠信息 -->
          <div class="discount-wrapper">
            <ul>
              <li class="discount-wrapper-list" v-for="support in sellers.supports">
                <span :class="classType[support.type]" class="discount-icon"></span>
                <p class="discount-text">{{ support.description }}</p>
              </li>
            </ul>
          </div>
          <!-- 标题一二-->
          <split v-bind:text='msg[1]'></split>
          <!-- 商家公告 -->
          <div class="notice-wrapper">
            <p class="notice-text">{{ sellers.bulletin }}</p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <span class="icon-close" v-on:click="hideDetail"></span>
      </div>
    </div>
  </div>
</template>
<script>
import star from '../star/star.vue'
import split from '../split/split.vue'
export default{
  data () {
    return {
      detailShow: false,
      msg: ['优惠信息', '商家公告']
    }
  },
  props: {
    sellers: {
      type: Object
    }
  },
  methods: {
    showDetail: function () {
      this.detailShow = true
    },
    hideDetail: function () {
      this.detailShow = false
    }
  },
  components: {
    star,
    split
  },
  created () {
    this.classType = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../common/style.css";
.clearfix{
  display: inline-block;
}
.clearfix:after{
  content: ".";
  display: block;
  height: 0;
  line-height: 0;
  clear:both;
  visibility: hidden;
}
body,html{
  line-height: 1;
  font-weight: 200;
  font-family: arial,sans-serif;
}
.decrease, .discount, .guarantee, .invoice, .special, .icon{
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  vertical-align: top;
}
.decrease{
  background-image: url("./decrease_1@2x.png");
}
.discount{
  background-image: url("./discount_1@2x.png");
}
.guarantee{
  background-image: url("./guarantee_1@2x.png");
}
.invoice{
  background-image: url("./invoice_1@2x.png");
}
.special{
  background-image: url("./special_1@2x.png");
}

.header{
  color: #fff;
  position: relative;
  background: rgba(7, 17, 27, 0.5);
  overflow: hidden;
}
.header .content-wrapper{
  padding:24px 12px 18px 24px;
  font-size: 0px;
  position: relative;
}
.header .content-wrapper .avatar{
  display: inline-block;
  vertical-align: top;
}
.header .content-wrapper .avatar img{
  border-radius: 2px
}
.header .content-wrapper .content{
  display: inline-block;
  font-size: 14px;
  margin-left: 16px;
}
.header .content-wrapper .content .support .text{
  font-size: 10px;
  line-height: 12px;
  vertical-align: top;
}
.header .content-wrapper .content .title{
  margin:2px 0 8px 0
}
.header .content-wrapper .content .description{
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 12px;
}
.header .content-wrapper .content .title .brand{
  width: 30px;
  height: 18px;
  display: inline-block;
  background-image: url("./brand@2x.png");
  background-size: 30px 18px;
  background-repeat: no-repeat;
  vertical-align: top;
}
.header .content-wrapper .content .title .name{
  margin-left: 6px;
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
}
.header .content-wrapper .support-count{
  position: absolute;
  right: 12px;
  bottom: 18px;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
}
.header .content-wrapper .support-count .count{
  font-size: 10px;
}
.header .content-wrapper .support-count .icon-keyboard_arrow_right{
  font-size: 10px;
}
.header .bulletin-wrapper{
  height: 28px;
  line-height: 28px;
  margin-top: 18px;
  background-color: rgba(7, 17, 27, 0.2);
  padding: 0 22px 0 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
}
.header .bulletin-wrapper .bulletin-title{
  display: inline-block;
  background-image: url('./bulletin@2x.png');
  width: 22px;
  height: 12px;
  margin-top: 8px;
  background-size: 22px 12px;
  vertical-align: top;
}
.header .bulletin-wrapper .bulletin-text{
  vertical-align: top;
  font-size: 10px;
  margin: 0 4px;
  color: rgb(255,255, 255);
}
.header .bulletin-wrapper .icon-keyboard_arrow_right{
  position: absolute;
  font-size: 10px;
  right: 12px;
  top: 8px;
}
.header .background{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
}
.header .detail{
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(7, 17, 27, 0.8);
  top: 0;
  left: 0;
}
.header .detail .detail-wrapper{
  min-height: 100%;
  width: 100%;
}
.header .detail .detail-wrapper .detail-main{
  margin-top: 64px;
  padding-bottom: 64px;
}
.header .detail .detail-wrapper .detail-main .name{
  line-height: 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}
.header .detail .detail-wrapper .detail-main .discount-wrapper{
  margin: 24px auto 28px auto;
  width: 292px;
}
.header .detail .detail-wrapper .detail-main .notice-wrapper{
  margin: 24px auto 28px auto;
  width: 292px;
}
.header .detail .detail-wrapper .detail-main .notice-wrapper .notice-text{
  font-size: 12px;
  line-height: 24px;
  font-weight: 200;
  color: rgb(255, 255, 255);
}
.header .detail .detail-wrapper .detail-main .discount-wrapper .discount-wrapper-list{
 margin-bottom: 12px;
}
.header .detail .detail-wrapper .detail-main .discount-wrapper .discount-wrapper-list:last-child{
  margin-bottom: 0
}
.header .detail .detail-wrapper .detail-main .discount-wrapper .discount-icon{
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size:16px 16px;
  vertical-align: middle
}
.header .detail .detail-wrapper .detail-main .discount-wrapper .discount-text{
  display: inline-block;
  font-size: 12px;
  line-height: 12px;
  font-weight: 100;
  color: rgb(255, 255, 255);
  vertical-align: middle;
}
.detail-close{
  position: relative;
  width: 32px;
  height: 32px;
  margin: -64px auto 0 auto;
  clear:both;
  font-size: 32px;
}

</style>
