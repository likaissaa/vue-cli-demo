<template>
	<div id="ratings">
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)" >
						<span class="text">
						<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
						</span>
          </li>

        </ul>
      </div>
      <div class="foods-wrapper" ref="foodWrapper">
        <ul>
          <li v-for="item in goods" class="food-list food-list-hook " >
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods"  class="food-item border-1px">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
	</div>
</template>
<script>
  import BScroll from 'better-scroll';
  import shopcart from '@/components/shopcart/shopcart'
  import cartcontrol from '@/components/cartcontrol/cartcontrol'
  import food from '@/components/food/food'
  const ERR_OK = 0;
  export default {
    //定义以为常量

    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {},
        listHeight: [],
        scrollY:0
      };
    },
    computed:{
      currentIndex(){
        //左侧在那个按钮上边哈哈
        for(let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      }
    },
    created(target) {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

      this.axios.get("/api/goods")
        .then(response => {
          if(response.data.errno == ERR_OK) {
            this.goods = response.data.data
            console.log(this.goods)
            this.$nextTick(() => {
              this._initScroll();
              this._calculateHeight();
            })

          } else {
            alert("失败")
          }
        })

    },
    components: {
      shopcart,
      cartcontrol,
      food
    },

    methods: {

      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodWrapper, {
          click: true,
          probeType: 3 //希望scroll 滚动的时候能告诉我们y 的位置
        });
        this.foodsScroll.on('scroll',(pos) => {

          this.scrollY = Math.abs(Math.round(pos.y));
        })
      },
      _calculateHeight() {
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for(let i=0 ;i<foodList.length;i++){
          let item = foodList[i];
          height+=item.clientHeight;
          this.listHeight.push(height);
        }
        console.log(this.listHeight)
      },
      selectMenu (index,event){
       if(!event._constructed){
         return;
       }
       //通过index 滚动到对应的节点
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
       console.log(foodList)
        console.log(foodList[0]);
         let el =foodList[index];
         this.foodsScroll.scrollToElement(el,300);


      }
    }
  }
</script>
<style scoped lang="less">
  @import "../../common/less/mixin.less";
  .goods {
    position: absolute;
    width: 100%;
    top: 174px;
    bottom: 46px;
    display: flex;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background-color: #f5f5f5;
      .menu-item {
        list-style: none;
        display: table;
        height: 54px;
        width: 56px;
        line-height: 14px;
        font-size: 12px;
        padding: 0 12px;
        &.current {
          position: relative;
          margin-top: -1px;
          background: #fff;
          font-weight: 700;
          .text {
            .border-none;
          }
        }
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease {
            .bg-image('goods/decrease_3');
          }
          &.discount {
            .bg-image('goods/discount_3');
          }
          &.guarantee {
            .bg-image('goods/guarantee_3');
          }
          &.invoice {
            .bg-image('goods/invoice_3');
          }
          &.special {
            .bg-image('goods/special_3');
          }
        }
        .text {
          display: table-cell;
          font-size: 12px;
          width: 56px;
          vertical-align: middle;
          .border-1px(rgba(7, 17, 27, 0.1))
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      .title {
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background: #f3f5f7;
      }
      li {
        list-style: none;
      }
      .food-item {
        list-style: none;
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        .border-1px(rgba(7, 17, 27, 0.1));
        &:last-child {
          .border-none;
          margin-bottom: 0;
        }
        .icon {
          flex: 0 0 57px;
          margin-right: 10px;
        }
        .content {
          flex: 1;
          .name {
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }
          .desc,
          .extra {
            line-height: 10px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
          .desc {
            margin-bottom: 8px;
            line-height: 12px;
          }
          .extra {
            .count {
              margin-right: 12px
            }
          }
          .price {
            font-weight: 700;
            line-height: 24px;
            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }
            .old {
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
          }
          .cartcontrol-wrapper {
            position: absolute;
            right: 0;
            bottom: 12px;
          }
        }
      }
    }
  }
</style>
