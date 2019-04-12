<template>
	<div>
		 <group>
      <calendar :readonly="readonly" v-model="demo1" :title="$t('Basic Usage')" disable-past placeholder="placeholder" @on-show="log('show')" @on-hide="log('hide')"></calendar>
    </group>

	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
</style>
