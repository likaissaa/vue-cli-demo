<template>
	<div id="app">
		<v-header :seller="seller"></v-header>
		<div class="tab border-1px">
			<div class="tab-item">
				<router-link to="/home/elema/goods">商品</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/home/elema/ratings">评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/home/elema/seller">商家</router-link>
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
		<router-view></router-view>
	</div>
</template>
<script>
	import Header from '../components/header/header.vue'
	import Star from '@/components/star/star.vue'
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
		mounted(){
			var _this=this
			_this.clickme()
		},
		methods:{
			clickme:function(){
                this.axios.get("/api/getinfo")
                    .then(response => {
                    	console.log(response)
                    	/*if(response.data.errno==0){
                    		this.seller=response.data.data
                    		console.log(this.seller)
                    	}
                    	else{
                    		alert("失败")
                    	}*/
                    })
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../common/stylus/mixin.styl"
	/*.tab{
		display:flex;
		width:100%;
		height:40px;
		line-height:40px;
	}
	.tab .tab-item{
		flex:1;
		text-align: center;
	}*/
	#app
		.tab
			display:flex
			width:100%
			height:40px
			line-height:40px
			border-1px(rgba(7,17,27,0.1))
			.tab-item
				flex:1
				text-align:center
				box-sizing:border-box
				& > a
					text-decoration:none
					display:block
					font-size:14px
					color:blue
					&.active
						color:rgb(240,20,20)
		.title
			display:flex
			width:80%
			margin:30px auto 24px auto
			.line
				flex:1
				position:relative
				top:-6px
				border-bottom:1px solid red
			.text
					padding:0 12px
					font-size:14px
		
		.fade-enter-active,.fade-leave-active
			transition:all 10s
			background:blue
			opacity:0.8
		.fade-enter,.fade-leave-to
			opacity: 0
			background:red
					
			.modal
			position:fixed
				width:100%
				height:100%
				top:0
				left:0
				overflow:auto
				z-index:9999
					
</style>