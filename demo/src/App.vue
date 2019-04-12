<template>
	<div id="app">
		<v-header :seller="seller"></v-header>
		<div class="tab border-1px">
			<div class="tab-item">
				<router-link to="/goods">商品</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/ratings">评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/seller">商家</router-link>
			</div>

		</div>
		<!--<div>
			<v-star :size="24" :score="4.1"></v-star>
			<div class="title">
				<div class="line"></div>
				<div class="text">这是文字信息</div>
				<div class="line"></div>
			</div>
		</div>
		<button type="button" @click="openmodal=!openmodal" >弹出框</button>
		<transition name="fade">
			<div v-show="openmodal" class="">
				我是弹出框
			</div>
		</transition>-->
		<keep-alive>
			<router-view :seller="seller"></router-view>
		</keep-alive>
	</div>
</template>
<script>
	import Header from '@/components/header/header.vue'
	import Star from '@/components/star/star.vue'
  const debug = process.env.NODE_ENV !== 'production';
	const ERR_OK=0;
	export default{
		data(){
			return{
				seller:{},
				openmodal:true
			}
		},
		components:{
			'v-header':Header,
			'v-star':Star
		},
		created(){
      const url = debug ? '/api/seller' : 'http://art.xminnov.com:8080/sell/api/seller';
			 this.axios.get(url)
                    .then(response => {
                    	 if (response.data.errno === ERR_OK) {
                    	 	this.seller=response.data.data
                    	 	console.log(this.seller)
				        }

                    })
		},
		mounted(){
			var _this=this
			_this.clickme()
		},
		methods:{
			clickme:function(){

			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped >
 @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
