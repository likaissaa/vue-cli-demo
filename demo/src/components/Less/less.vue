<template>
	<div>
		<nav>
			<ul>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
			</ul>
		</nav>
		<div class="inline">
			22222
		</div>
		<a class="bear">123</a>
		<div>
			<div class="thing1">22</div>
			<div class="thing2">33</div>
		</div>
		<div>
			<div class="mixin-class">aaaaaaaa</div>
			<div class="mixin-id">bbbbbbbb</div>
		</div>
		<div class="first">
			<div class="class">ccccc</div>
		<!--	<div class="my-mixin">dddddd</div>-->
		</div>
		<div class="second">
			<div class="c">fffffff</div>
		</div>
		<div class="third">
			<div class="important">gggggggggggggg</div>
			<div class="unimportant">hhhhhhhhhhhhhh</div>
		</div>
		<div class="fourth">
			<div class="me1">iiiiiii</div>
			<div class="me2">jjjjj</div>
		</div>
		<div class="boxs">
			<div class="boxshadow" >
				
			</div>
		</div>
		
		<div class="fifth">
			<div class="caller">123</div>
		</div>
		<div class="sixth">
			<div class="sixth-1">33333333333333</div>
		</div>
	</div>
</template>
<style scoped lang="less">
	nav ul{
		&:extend(.inline);
		background:blue;
	}
	.inline{
		color:red
	}
	a{
		display:block;
		width:60px;
		height:60px;
		
	}
	.animal{
		background-color:black;
		color:white;
	}
	
	.bear{
		&:extend(.animal);
		background-color:yellow
	}
	.my-inline-block{
		display:inline-block;
		font-size:0;
	}
	.thing1{
		&:extend(.my-inline-block);
	}
	.thing2{
		&:extend(.my-inline-block);
	}
	.a,#b{
		color:red;
	}
	.mixin-class {
		.a
	}
	.mixin-id{
		#b
	}
	
	.my-mixin(){
		color:black;
	}
	.my-other-mixin(){
		background:white;
	}
	.class{
		.my-mixin;
		.my-other-mixin;
	}
	#outer{
		.inner{
			color:red
		}
	}
	.c{
		#outer.inner()
	}	
	
	.foo(@bg,@color){
		background:@bg;
		color:@color;
	}
	.unimportant{
		.foo(red,yellow)
	}
	.important{
		.foo(red,blue) !important;
	}
	.myproperty(@color:black;@margin:10px;@padding:20px){
		color:@color;
		margin:@margin;
		padding:@padding;
	}
	.me1{
		.myproperty(@margin:20px;@color:#33acfe);
	}
	.me2{
		.myproperty(red,@padding:40px)
	}
	.box-shadow(@x:0;@y:0;@blur:1px;@color:#000){
		-webkit-box-shadow:@arguments;
		-moz-box-shadow:@arguments;
		box-shadow:@arguments;
	}
	.boxshadow{
		width:100px;height:20px;
		.box-shadow(2px;5px)
	}
	.mixin(){
		@width:100%;
		@height:200px;
	}
	.caller{
		.mixin();
		width:@width;
		height:@height;
	}
	.average(@x,@y){
		@average:((@x+@y)/2);
	}
	.sixth-1{
		.average(16px,50px);
		padding:@average;
	}
</style>