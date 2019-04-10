// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from '@/store/index'
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.axios = axios
import {LoadingPlugin} from 'vux'
Vue.use(LoadingPlugin)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
