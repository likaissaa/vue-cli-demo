export default{
	increment({commit}){
		commit('INCREMENT')
	},
decrement({commit}){
		commit('DECREMENT')
},
	
	 incrementWithValue({commit,state},value){
		commit("INCREMENTWITHVALUE",parseInt(value))
	},
	
	login({commit},user){
		commit('LOGIN',user)
	},
	
	logout({commit}){
		commit('LOGOUT')
	}
	}
