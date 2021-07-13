<!--
 * @Author: xiaolifeipiao
 * @Description: 360car测试
 * @version: 0.0.0
 * @Date: 2021-07-13 10:40:01
 * @LastEditTime: 2021-07-13 11:40:39
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\CarTest.vue
-->
<template>
  <div
      class="cloudimage-360"
      data-folder="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car/"
      data-filename="iris-{index}.jpeg"
      data-amount="36"
      data-magnifier="3"
      data-spin-reverse
    ></div>
</template>

<script>
import {defineComponent,onMounted,onUnmounted} from 'vue'
import  'js-cloudimage-360-view'
export default defineComponent({
    name:'CarTest',
    setup(){
        onMounted(()=>{
            window.CI360.init()
        })
        onUnmounted(()=>{
            window.CI360.destroy()
        })
    }
}) 
</script>

<style>
.cloudimage-360{
    height:160px ;
}
</style>