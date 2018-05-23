<template>
	<div>
		<div class="header">
			<div class="content-wrapper">
				<div class="avatar">
					
				</div>
				<div class="content">
					<div class="title">
						<span class="brand"></span>
						<span class="name">{{seller.name}}</span>
					</div>
					<div class="description">
						{{seller.text}}
					</div>
				</div>
			</div>
			<div class="bullentin-wrapper"></div>
		</div>	
	</div>
	
</template>
<script>
	export default{
		props:['seller'],
		data(){
			return{
				
			}
		},
		
	}
</script>
<style>
	.header{
		overflow:hidden;
	}
</style>