<template>
  <div class="goods">
    <div class="menu-wrapper" ref:menu-wrapper>
      <ul>
        <li class="menu-item" v-for="item in goods">
          <span class="text">
            <span v-show="item.type > 0" class="icon" v-bind:class="ClassMap[item.type]"></span>{{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref:food-wrapper>
      <ul>
        <li v-for = "item in goods" class="food-list">
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li v-for = "food in item.foods" class="food-item">
              <div class="food-icon">
                <img width="57" height="57" src="" alt="" v-bind:src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="description">{{ food.description }}</p>
                <div class="extra">
                  <span class="sellCount">月售{{ food.sellCount }}份</span>
                  <span class="rating">好评率{{ food.rating }}%</span>
                </div>
                <div class="price">
                  <span class="real-price">￥{{ food.price }}</span>
                  <span class="old-price" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
const ERR_OK = 0
export default {
  data () {
    return {
      goods: []
    }
  },
  props: {
    sellers: {
      type: Object
    }
  },
  created () {
    this.ClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    // GET /someUrl
    this.$http.get('/api/goods').then(response => {
      // get body data
      response = response.body
      if (response.errno === ERR_OK) {
        this.goods = response.data
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    }, response => {
      // error callback
      alert('erros')
    })
  },
  methods: {
    _initScroll: function () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {startX: 0, startY: 0})
      this.foodScroll = new BScroll(this.$refs.foodWrapper, {startX: 0, startY: 0})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.decrease{
  background-image: url("./decrease_3@2x.png");
}
.discount{
  background-image: url("./discount_3@2x.png");
}
.guarantee{
  background-image: url("./guarantee_3@2x.png");
}
.invoice{
  background-image: url("./invoice_3@2x.png");
}
.special{
  background-image: url("./special_3@2x.png");
}

.goods{
  position: absolute;
  width: 100%;
  top: 192px;
  bottom: 46px;
  display: flex;
  overflow: hidden;
}
/*menu-wrapper*/
  .menu-wrapper{
    width: 80px;
    flex: 0 0 80px;
    background: #f3f5f7;
  }
    .menu-wrapper .menu-item{
      display: table;
      width: 56px;
      height: 54px;
      line-height: 14px;
      padding: 0px 12px;
    }
      .menu-wrapper .menu-item .icon{
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        vertical-align: top;
      }
      .menu-wrapper .menu-item .text{
        text-align: center;
        font-size: 12px;
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        border-bottom: rgba(7, 17, 27, 0.1) 1px solid;
      }
/*foods-wrapper*/
  .foods-wrapper{
    flex: 1;
  }
    .foods-wrapper .title{
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background-color: #f3f5f7;
    }
    .foods-wrapper .food-item{
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      border-bottom: rgba(7, 17, 27, 0.1) 1px solid;
    }
    .foods-wrapper .food-item:last-child{
      border-bottom: 0;
      margin-bottom: 0;
    }
      .foods-wrapper .food-item .food-icon{
        flex: 0 0 57px;
        margin-right: 10px;
      }
      .foods-wrapper .food-item .content{
        flex: 1
      }
        .foods-wrapper .food-item .content .name{
          margin-top: 2px;
          font-size: 14px;
          color: rgb(7, 17, 27);
          line-height: 14px;
          margin-bottom: 8px;
          height: 14px;
        }
        .foods-wrapper .food-item .content .description{
          font-size: 10px;
          color: rgb(147, 153, 159);
          line-height: 10px;
          margin-bottom: 8px
        }
        .foods-wrapper .food-item .content .extra{
          font-size: 0px;
          color: rgb(147, 153, 159);
          line-height: 10px;
        }
          .foods-wrapper .food-item .content .extra .sellCount{
            font-size: 10px;
            display: inline-block;
            margin-right: 12px;
          }
          .foods-wrapper .food-item .content .extra .rating{
            font-size: 10px;
            display: inline-block;
          }
        .foods-wrapper .food-item .content .price{
          font-size: 0px;
        }
          .foods-wrapper .food-item .content .price .real-price{
            font-size: 14px;
            color: rgb(240, 20, 20);
            line-height: 24px;
            font-weight: 700;
            margin-right: 8px;
          }
          .foods-wrapper .food-item .content .price .old-price{
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
            line-height: 24px;
            font-weight: 700;
          }
</style>
