<template>
	<div>
		<el-form ref="form" label-position="left" :rules="rules" :model="form" class="myform" label-width="80px">
			<h5 style="text-align: center;">登录系统</h5>
			<el-form-item label="用户名" prop="username">
				<el-input v-model="form.username" @keyup.enter.native="onSubmit"></el-input>
			</el-form-item>
			<el-form-item label="token" prop="token">
				<el-input v-model="form.token"></el-input>
			</el-form-item>
			<div>
				<el-button type="primary" style="width:100%;" @click="onSubmit" :loading="isloading">登录</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					form: {
						username: 'admin',
						password: '123',
						token:'123'
					},
					rules: {
						username: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						}],
						token:[{
							required: true,
							message:'请输入token',
							trigger:'blur'
						}]
					},
					isloading: false
				};
			},
			watch: {
				'$route' (to, from,query) {
					console.log(this.$route)
				}
			},
		methods: {
			onSubmit: function() {
				var name = this.form.username;
				var token = this.form.token
				if(name == ""||token=="") {
					this.$message({
						message: '账号或者token为空！',
						type: "error"
					})
					return;
				} else if(name != ""&&token!="") {
					this.$message({
						message: '登陆成功！',
						type: "success"
					})
					
					/*this.isloading = true;*/
					this.$store.dispatch("login", this.form)
					const redirect = decodeURIComponent(this.$route.query.redirect || '/home/loginsuccess');
					console.log("当前redirect="+redirect)
					this.$router.push({
						path: redirect
					})
				} else {
					this.$message({
						message: '账号或者密码错误！',
						type: "error"
					})
				}
			}
		}
	}
</script>

<style type="text/css" scoped>
	.line {
		text-align: center;
	}
	
	.el-form {
		width: 360px;
		margin: 50px auto;
		border: 1px solid #D5D5D5;
		padding: 45px 20px;
		border-radius: 4px;
		box-shadow: 0 0 4px rgba(0, 0, 0, .5);
		box-shadow: 0 0 2px rgba(0, 0, 0, .6) inset;
	}
	
	.el-select {
		width: 100%;
	}
	
	.el-tabs {
		border: 1px solid #ddd;
		border-radius: 4px;
		box-shadow: 0 0px 20px rgba(0, 0, 0, .5);
	}
	
	.el-row {
		margin-bottom: 20px;
	}
</style>