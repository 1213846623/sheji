<template>
	<div>
		<div @click="diana">暗暗</div>
		<ll v-if="bol"></ll>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				bol:false,
				t2:false
			}
		},
		methods:{
			diana(){
				this.bol = true;
			}
		},
		mounted(){
			console.log(2);
		},
		components:{
			ll:()=>import("@/components/ll")
		}
	}
</script>

<style>
</style>
