import axios from 'axios'
import store from '../store/index.js'
import {router} from '../router/index.js'
//axios 全局配置
axios.defaults.timeout = 5000;
/*axios.defaults.baseURL = "https://api.github.com";*/

//紧接着配置他的拦截器
axios.interceptors.request.use(
	function(config) {
		if(store.state.user.token) {
			console.log("我来啊啊啊啊="+store.state.user.token)
			config.headers.Authorization = `token ${store.state.user.token}`;
		}
		return config
	},

	function(err) {
		return Promise.reject(err);
	}
)

//拦截器拦截 返回结果

axios.interceptors.response.use(
	function(response) {
		return response
	},

	function(error) {
		if(error.response) {
			switch(error.response.status) {
				case 401:
					store.dispatch('logout')
					router.replace({
						path: '/home/login',
						query: {
							redirect: router.currentRoute.fullPath
						}
					})
			}
		}
		return Promise.reject(error.response.data)
	}
)
export default axios;
