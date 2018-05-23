<template>
	<div id="teststylus">
		<div class="haha">
			<span>123</span>
			<p>this the article u love</p>
			<p>hello boy</p>
		</div>
		<a href="#">
			<button type="button">
				nihao
			</button>
		</a>
		<div class="jiji">
			<div class="jiji-1">123</div>
			<div class="jiji-2">456</div>
		</div>
		<div class="fourth">
			<button type="button">fourth</button>
		</div>
		<div class="fifth">
			<table>
				<tr>
					<td>1</td>
				</tr>
				<tr>
					<td>1</td>
				</tr>
				<tr>
					<td>1</td>
				</tr>
				<tr>
					<td>1</td>
				</tr>
				<tr>
					<td>1</td>
				</tr>
				<tr>
					<td>1</td>
				</tr>
			</table>
		</div>
		<div class="sixth">
			<div class="sixth-pad">1</div>
			<div class="sixth-mar">2</div>
			<div class="sixth-all">3</div>
		</div>
		<div class="seventh">
			<div class="seventh-1">haha</div>
		</div>
		<div class="eighth">
			<div class="eighth-1">jijj</div>
		</div>
		<div class="nineth">
			<div class="nineth-1">jijj</div>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				
				<li>4</li>
				<li>5</li>
			</ul>
		</div>
		<div class="tenth clearfix">
			<div class="fl">
				123
			</div>
			<div class="fr">
				123
			</div>
		</div>
	</div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"

	a
		&>button
			-webkit-border-radius:5px
			-moz-border-radius:5px
			border-radius:5px
	.haha
		font font sans-serif
	.jiji
		position:relative
		width:200px
		height:200px
		border:2px solid red
		.jiji-1
			position:absolute
			top:50%
			left:50%
			width: 150px
			height:80px
			margin-left: -(@width / 2)
			margin-top: -(@height / 2)
			z-index:10
		.jiji-2
			color:blue
			position:absolute
			top:0
			left:0
	.fourth
		button
			width:100px
			height:100px
			border-radius:1px 2px / 3px 4px
	.fifth
		table tr td
			border:1px solid red
	.sixth
		.sixth-pad
			pad()
		.sixth-mar
			pad(margin)
		.sixth-all
			pad(padding margin,10px)
	.seventh
		.seventh-1
			width:100px
			height:100px
			border:1px solid red
			border-radius(5px)
	.eighth
		.eighth-1
			width:100px
			height:100px
			background-color:red
			&:hover
				opacity:0.5
	.nineth
		ul
			comma-list()
	.tenth
		border:1px solid red
		&.clearfix
			display:inline-block
			width:100%
			.fl
				float:left
			.fr
				float:right
		
</style>