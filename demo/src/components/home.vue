<template>
	<div>
		<el-container>
			<!--设置一个header切换-->
			<el-header>
				<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
					<!--<el-menu-item index="/home/login">登录界面</el-menu-item>-->
					<!--<el-menu-item index="/home/loginsuccess">登录成功</el-menu-item>-->
					<!--<el-menu-item index="/home/register">-->
						<!--注册界面-->
					<!--</el-menu-item>-->
					<el-menu-item index="/home/elema">
						饿了吗页面测试
					</el-menu-item>
					<!--<el-menu-item index="/home/stylus">-->
						<!--stylus 样式测试-->
					<!--</el-menu-item>-->
					<!--<el-menu-item index="/home/less">-->
						<!--less 样式测试-->
					<!--</el-menu-item>-->
					<!--<el-menu-item index="/home/work/center">-->
						<!--工作中心-->
					<!--</el-menu-item>-->
					<!--<el-menu-item index="/home/reslist">
						作品列表
					</el-menu-item>
					<el-menu-item index="/home/mintui">
						mintui
					</el-menu-item>
					<el-menu-item index="/home/bar">
						bar
					</el-menu-item>-->
				</el-menu>
				<div class="line"></div>
			</el-header>
			<div>
				<router-view></router-view>
			</div>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
				return {

				};
		},
		methods: {
			handleSelect(key, keyPath) {
				/*console.log(key, keyPath);*/
			}
		}
	}
</script>

<style type="text/css">
	* {
		margin: 0;
		padding: 0;
	}
</style>
