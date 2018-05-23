export default{
	increment({commit}){
		commit('INCREMENT')
	},
decrement({commit}){
		commit('DECREMENT')
},
	
	 incrementWithValue({commit},value){
		console.log(value)
		commit("INCREMENTWITHVALUE",parseInt(value))
	},
	
	login({commit},user){
		commit('LOGIN',user)
	},
	
	logout({commit}){
		commit('LOGOUT')
	}
	}
