<template>
	<div>
		welcome
		<div class="red">
			{{user.username}}
		</div>
		<div>
			<el-button type="danger" @click="logout">退出</el-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {
		mapState
	} from 'vuex'
	export default {
		computed: mapState({
			user: state => state.user
		}),
		methods: {
			logout() {
				this.$store.dispatch("logout")
				this.$router.replace({
					path: '/home/login'
				})
			}
		}
	}
</script>

<style type="text/css">
	.red {
		color: red;
		font-size: 30px;
		border: 2px solid black;
	}
</style>