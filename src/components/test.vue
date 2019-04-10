<template>
  <div>
    <div style="padding:15px;">
      <x-button @click.native="showPosition('bottom')" type="primary">Bottom</x-button> 
    </div>

    <toast v-model="showPositionValue" type="text" :time="1200" is-show-mask text="账号密码为6到12,有数字字母下划线组成" ></toast>
  </div>
</template>


<script>
import { Toast,XButton } from 'vux'
export default {
  components: {
    Toast,
    XButton
  },
  methods: {
    showPosition (position) {
      this.position = position
      this.showPositionValue = true
    },
  },
  data () {
    return {
      position: 'default',
      showPositionValue: false
    }
  }
}
</script>
