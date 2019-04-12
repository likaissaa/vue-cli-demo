import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import Login from '@/components/login.vue'
import Register from '@/components/register.vue'
import Work from '@/components/work.vue'
import Newhtml from '@/components/Newhtml.vue'
import Reslist from '@/components/reslist.vue'
import Loginsuccess from '@/components/loginsuccess.vue'
import Mintui from '@/components/mintui.vue'
import Bar from '@/components/bar.vue'
import Elema from '@/components/elema.vue'
import Goods from '@/components/goods/goods.vue'
import Ratings from '@/components/ratings/ratings.vue'
import Seller from '@/components/seller/seller.vue'
import Teststylus from '@/components/stylushtml/teststylus.vue'
import Star from '@/components/star/star.vue'
import Less from '@/components/Less/less.vue'
import store from '@/store/index';

Vue.use(Router)

export const router = new Router({
	linkActiveClass:'active',
	routes: [{
		path: '/',
		redirect: '/goods'
	}, {
		path: '/goods',
		component: Goods
	}, {
		path: 'ratings',
		component: Ratings
	}, {
		path: 'seller',
		component: Seller
	}]
	// routes: [{
	// 	path: '/',
	// 	redirect: '/home',
	// 	component: Home,
	// 	children: [{
	// 		path: '/home/',
	// 		redirect: '/home/login',
	// 		component: Login,
	// 		children: [{
	// 			path: '/home/login',
	// 		}]
	// 	}, {
	// 		path: '/home/register',
	// 		component: Register,
	// 		meta: {
	// 			auth: true
	// 		}
	// 	},
	// 	{
	// 		path:'/home/reslist',
	// 		component:Reslist,
	// 		meta:{
	// 			auth:true
	// 		}
	// 	},
	// 	{
	// 		path: '/home/work/center',
	// 		component: Work,
	// 		meta: {
	// 				auth: true
	// 		}
	// 	},
	// 	{
	// 		path: '/home/loginsuccess',
	// 		meta: {
	// 			auth: false
	// 		},
	// 		component: Loginsuccess,
	// 	},
	// 	{
	// 		path: '/home/mintui',
	// 		meta: {
	// 			auth: false
	// 		},
	// 		component: Mintui,
	// 	},
	// 	{
	// 		path: '/home/bar',
	// 		meta: {
	// 			auth: false
	// 		},
	// 		component: Bar,
	// 	},
	// 	{
	// 		path: '/home/elema',
	// 		meta: {
	// 			auth: false
	// 		},
	// 		component: Elema,
	// 		children:[{
	// 		path: 'goods',
	// 		meta: {
	// 			auth: false
	// 		},
	// 		component: Goods,
	// 		},
	// 		{
	// 			path: 'ratings',
	// 			meta: {
	// 				auth: false
	// 			},
	// 			component: Ratings,
	// 		},
	// 		{
	// 			path: 'seller',
	// 			meta: {
	// 				auth: false
	// 			},
	// 			component: Seller,
	// 		}]
	// 	},
	// 	{
	// 		path: '/home/stylus',
	// 			meta: {
	// 				auth: false
	// 			},
	// 			component: Teststylus,
	// 	},
	// 	{
	// 		path:'/home/less',
	// 		meta: {
	// 				auth: false
	// 			},
	// 		component: Less,
	// 	}
	// 	/*{

	// 		path: '*', //其他页面，强制跳转到登录页面
	// 		redirect: '/home/login'

	// 	},*/
	// 	]
	// }]
})

if (sessionStorage.getItem('user')) {
	console.log("刷新当前页面")
	console.log(sessionStorage.getItem('user'))
    store.dispatch("login", sessionStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
	var auth = to.meta.auth
	var path = to.path
	var isLogin = Boolean(store.state.user.token) /*非空na么就是登录了*/
	console.log("路由的token="+store.state.user.token)
/*	console.log("111111"+auth)
	console.log("22222222"+path)
	console.log("33333333333"+!isLogin)*/
	if(auth){
		if(auth && !isLogin && path != '/home/login') {
			console.log("**********")
			next({path:'/home/login',
				query:{
					redirect:to.fullPath
				}
			})
	} else {
			next()
		}
	}
	else{
		console.log(to.fullPath)
		next()
		/*next({
			query:{
					redirect:to.fullPath
				}
		}
		)*/
	}
})
