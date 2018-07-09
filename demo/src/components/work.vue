<template>
	<div id="">
		<el-button type="danger" @click="getinfo">获取数据</el-button>
		<div v-for="info in infos">
			教师名称:{{info.teachername}}<br/>
			教师电话{{info.phone}}
		</div>
		<p>{{count}}</p>
		<p>
			<button @click="add">+</button>
			<button @click="dec">--</button>
		</p>
		<!--测试vuex-->
		<div>
			<input type="text" v-model="incrementValue" />
			<button @click="incrementWithValue">increment</button>
		</div>
		<div id="">
			<p>测试 属性访问和 方法访问</p>
			<div>1: {{doneTodosCount}}</div>
			<div>2: {{todos}}</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	/*import store from '../store/index.js'*/
	import {
		mapState,
		mapActions
	} from 'vuex';
	export default {
		data() {
				return {
					incrementValue: 0,
					infos:[]
				};
			},
			computed:{ 
				...mapState({
				count: state => state.count
				}),
//				count(){
//					return this.$store.state.count
//				},
//				count:function(){
//					return this.$store.getters.count;
//				},
		        todos:function() {  //通过方法访问  
		            return this.$store.getters.doneTodos;  
		        },  
		        doneTodosCount () {  
		            return this.$store.getters.doneTodosCount  
		        }  
			},
			methods: {
				...mapActions({
					add: 'increment',
					dec: 'decrement',
				}),
				incrementWithValue() {
					//可以直接mutations
//					this.$store.commit("INCREMENTWITHVALUE",parseInt(this.incrementValue));
					//首先提交到可以一步的action 在提交到mutations
					this.$store.dispatch("incrementWithValue", this.incrementValue)
					
				},
				getinfo() {
					this.axios.get("/api/seller")
						.then(response => {
							/*console.log(response.data.data)*/
							console.log(response)
						})
				}
			}
	}
</script>

<style>
	a {
		display: block;
		text-decoration: none;
		color: white;
	}
</style>