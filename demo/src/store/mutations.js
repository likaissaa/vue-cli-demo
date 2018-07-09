	import Vue from 'vue'
	import * as types from './mutations-types'
	export default{
		[types.INCREMENT]  (state)  {
			console.log(state)
			state.count++
		},
		[types.DECREMENT]  (state)  {
			state.count--
		},
		[types.ADDTARGET]  (state,value)  {
			state.addtarget=value;
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