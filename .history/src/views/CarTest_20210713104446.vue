<!--
 * @Author: xiaolifeipiao
 * @Description: 360car测试
 * @version: 0.0.0
 * @Date: 2021-07-13 10:40:01
 * @LastEditTime: 2021-07-13 10:44:45
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\CarTest.vue
-->
<template>
  
</template>

<script>
import {defineComponent,onMounted} from 'vue'
import CI360 from 'js-cloudimage-360-view'
export default defineComponent({
    name:'CarTest',
    setup(){
        onMounted(()=>{
            CI360.I
        })
    }
}) 
</script>

<style>

</style>