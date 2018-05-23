<template>
	<div>
		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<li v-for="item in list">{{ item }}</li>
		</ul>
		<mt-progress :value="gaga">
			<div slot="start">0%</div>
			<div slot="end">100%</div>
		</mt-progress>
		<mt-button type="primary" @click="begin">开始</mt-button>
		<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					list: [1, 2, 3, 4, 5, 6, 7, 8],
					gaga: 0,
					slots: [{
						flex: 1,
						values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
						className: 'slot1',
						textAlign: 'right'
					}, {
						divider: true,
						content: '-',
						className: 'slot2'
					}, {
						flex: 1,
						values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
						className: 'slot3',
						textAlign: 'left'
					}]
				}
			},
			methods: {
				loadMore() {
					this.loading = true;
					setTimeout(() => {
						let last = this.list[this.list.length - 1];
						for(let i = 1; i <= 10; i++) {
							this.list.push(last + i);
						}
						this.loading = false;
					}, 2500);
				},
				begin() {
					alert(123)
					for(var i = 1; i < 100; i++) {
						this.gaga = this.gaga + 1;
						if(this.gaga > 90)
							break;
					}
				},
				onValuesChange(picker, values) {
					console.log(picker.getValues())
					if(values[0] > values[1]) {
						picker.setSlotValue(1, values[0]);
					}
				}
			}
	}
</script>
<style scoped="scoped">
	ul {
		border: 2px solid red;
		height: 300px;
		overflow-y: auto;
	}
</style>