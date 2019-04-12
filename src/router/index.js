import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
			path:"/text",
			name:"text",
			component:()=>import('@/components/test')
		},{
			path:"/home",
			name:"home",
			component:()=>import('@/components/home'),
			redirect: '/home/shouye',
      children: [
        {
          path: 'shouye',
          name: 'shouye',
          component: ()=>import("@/components/three/shouye")
        },
         {
          path: 'sel',
          name: 'sel',
          component: ()=>import("@/components/three/sel")
        }, {
          path: 'me',
          name: 'me',
          component: ()=>import("@/components/three/me")
        }
      ]
		},{
			path:"/caiji",
			name:"caiji",
			component:()=>import('@/components/caiji')
		}
  ]
})
