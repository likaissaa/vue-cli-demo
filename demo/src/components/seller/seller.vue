<template>
	<div id="app">
		<!--测试flex使用-->
    <div class="seller" >
      <div class="sell-left" ref="left">
        <ul class="food">
          <li class="food-li" v-for="(list,index) in lists" @click="clickleft(index,$event)" :class="{'current':currentIndex===index}">{{index}}</li>
        </ul>
      </div>
      <div class="sell-right" ref="right">
        <ul class="content">
            <li class="content-li" v-for="(list,index) in lists">{{list.text}}</li>
        </ul>
      </div>
    </div>
	</div>
</template>
<script>
  import BScroll from 'better-scroll';

	export default{
	  data(){
	    return{
	      scrollY:0,
        scrollX:0,
	      listHeight:[],
        lists:[{text:'ganni0'},{text:'ganni1'},{text:'ganni2'},{text:'ganni3'},{text:'ganni4'},{text:'ganni5'},{text:'ganni6'},{text:'ganni7'},]
      }
    },
    computed:{
	    currentIndex(){
	      //左边滑动到第几个了

          for(let i=0;i<this.listHeight.length;i++){
            let height1=this.listHeight[i];
            let height2=this.listHeight[i+1];
            console.log(this.scrollX)
            //如果y 滑到了 一半左右那么做百年就开始提高

            if(!height2||(this.scrollY>=height1&&this.scrollY<height2)){
              if(height1>this.listHeight[this.listHeight.length - 1]/2){
                //x 往上走 50px;
                let leftlist = this.$refs.left.getElementsByClassName("food-li");
                let el =leftlist[i];
                this.leftScroll.scrollToElement(el,300);
                console.log("***************************")
              }
              else{

                let leftlist = this.$refs.left.getElementsByClassName("food-li");
                let el =leftlist[0];
                this.leftScroll.scrollToElement(el,300);
              }
              return i;
            }
          }
          return 0;
      }
    },
    created(){
      this.$nextTick(() => {
        this._initScroll();
        //定义一个方法
         this._calculateHeight();
      })
    },
    methods:{
	    _initScroll (){
        this.leftScroll = new BScroll(this.$refs.left, {
          click: true
        });
        this.rightScroll = new BScroll(this.$refs.right, {
          click: true,
          probeType: 3
        });
        this.rightScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        })
        this.leftScroll.on('scroll', (pos) => {
          this.scrollX= Math.abs(Math.round(pos.x));
        })
      },
      _calculateHeight (){
	      let rightlist = this.$refs.right.getElementsByClassName("content-li");
	      let height=0;
	      this.listHeight.push(height);
	      for(let i=0;i<rightlist.length;i++){
	        height += rightlist[i].clientHeight;
	        this.listHeight.push(height)
        }
        console.log(this.listHeight);
      },
      clickleft (index,event){
	      //根据索引跳转到 某list height 的高度
        if(!event._constructed){
          return;
        }
        let rightlist = this.$refs.right.getElementsByClassName("content-li");
        let el =rightlist[index];
        this.rightScroll.scrollToElement(el,300);
      }
    }
  };
</script>
<style scoped lang="less">
  @import "../../common/less/mixin.less";
  .seller{
    position: absolute;
    width: 100%;
    top: 174px;
    bottom: 46px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    display:flex;
    .sell-left{
      width:80px;
      flex:0 0 80px;
      .border-red();
      .food{
        .food-li{
          height:80px;
          .border-1px(rgba(7, 17, 27, 0.1))
        }
        .current{
          background:black;
          color:white;
        }
      }
    }
    .sell-right{
      flex:1;
      .border-red();
      .content{
        li{
          height:250px;
          .border-red()
        }
      }
    }
  }


</style>
