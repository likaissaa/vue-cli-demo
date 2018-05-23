	import Vue from 'vue'
	import {INCREMENT,DECREMENT} from './mutations-types'
	export default{
		[INCREMENT]  (state)  {
			console.log(state)
			state.count++
		},
		[DECREMENT]  (state)  {
			state.count--
		},
		INCREMENTWITHVALUE  (state, value)  {
			state.count += value
		},
		LOGIN  (state, user)  {
			sessionStorage.setItem('user', JSON.stringify(user))
			state.user=JSON.parse(sessionStorage.getItem("user"))||{}
	
		},
		LOGOUT (state)  {
			sessionStorage.removeItem('user')
			state.user={}
		}
	}