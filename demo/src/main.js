// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index';
import {
	router
} from './router'
import axios from './axios/http.js'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import echarts from 'echarts'
import 'mint-ui/lib/style.css'
import '@/common/stylus/index.styl'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, {
	size: 'small'
})
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.prototype.$echarts = echarts 
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	axios,
	template: '<App/>',
	components: {
		App
	}
})