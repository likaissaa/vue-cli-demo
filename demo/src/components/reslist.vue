<template>
	<div>
		<div>当前页面的token码 :{{user.username}}</div>
		<div>当前页面的username :{{user.token}}</div>
		  <div v-for="repo in list" class="only">
		  	<div class="md-title">{{repo.name}}</div>
        	<div class="md-subhead">{{repo.description}}</div>
		  </div>
		  
	</div>
</template>
<script type="text/javascript">
import api from '../constant/api'
import {mapState} from 'vuex'
	export default{
		data(){
			return{
				list:[]
			}
		},
		computed:mapState({user:state=>state.user}),
		mounted(){
			var _this=this
			_this.$nextTick(function(){
				_this.clickme()
			})
		},
		methods:{
			clickme:function(){
				let params = {
                    sort: 'updated'
                }
                this.axios.get("https://api.github.com/user/repos", params)
                    .then(response => {
                    	console.log(response)
                        this.list = response.data;
                    })
			}
		}
	}
</script>

<style type="text/css">
	.only{
		border:1px solid red;
		border-radius: 4px;
		background-color:#d5d5d5;
		box-shadow:0 2px 4px rgba(0,0,0,.5);
		margin:20px 10px;
	}
</style>