<template>
  <div>

      <x-address style="display: inline-block;" title="" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址"  :show.sync="showAddress"></x-address>

  </div>
</template>


<script>
import {  XAddress, ChinaAddressV4Data} from 'vux'

export default {
  components: {
    XAddress
  },
  data () {
    return {

      value: [],

      addressData: ChinaAddressV4Data,

      showAddress: false
    }
  },
  methods: {
    doShowAddress () {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    onShadowChange (ids, names) {
      console.log(ids, names)
    },
    changeData () {
      this.value2 = ['430000', '430400', '430407']
    },
    changeDataByLabels () {
      this.value2 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2 () {
      this.value2 = ['广东省', '中山市', '--']
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    }
  }
}
</script>