import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
		user:""
  },
	getters: {
		getUser: (state) => {
			return state.user
		}
	},
  mutations:{
		setUser:(state,n)=>{
			console.log(1);
			state.user = n
		}
  }
})