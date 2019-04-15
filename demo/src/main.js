// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index';
import {
	router
} from './router'
import fastclick from 'fastclick'
import axios from './axios/http.js'
import VueClipboard from 'vue-clipboard2'
import '@/common/stylus/index.styl'

Vue.use(VueClipboard)
Vue.config.productionTip = false
Vue.prototype.axios = axios;
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
