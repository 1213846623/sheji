<template>
	<div id="home">
	<router-view/>
	{{$store.getters.getUser}}
	<tabbar>
      <tabbar-item selected @on-item-click="select('shouye')">
        <img slot="icon" src="../assets/qq.png">
        <span slot="label" >首页</span>
      </tabbar-item>
      <tabbar-item show-dot @on-item-click="select('sel')">
        <img slot="icon" src="../assets/qq.png">
        <span slot="label">选课</span>
      </tabbar-item>
      <tabbar-item badge="2" @on-item-click="select('me')">
        <img slot="icon" src="../assets/qq.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
	<div style="height: 68px;"></div>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem} from 'vux'
	
	export default{
		data:function(){
			return{

			}
		},
		methods:{
			select(e){
				this.$router.push({ name: e})
			}
		},
		components: {
					Tabbar,
					TabbarItem,
					
				  },
	}
</script>

<style>
	a{
		text-decoration: none;
	}
	.weui-tabbar{
		position: fixed !important;
	} 
	.weui-tabbar__label{
		margin: 5px 0 !important;
	}
</style>
