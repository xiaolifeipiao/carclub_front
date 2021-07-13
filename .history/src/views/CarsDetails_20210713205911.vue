<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情页开发
 * @version: 0.0.0
 * @Date: 2021-07-13 20:51:23
 * @LastEditTime: 2021-07-13 20:59:11
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\CarsDetails.vue
-->
<template>
    <nav-bar :title="title"></nav-bar>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@coms/NavBar.vue'
export default defineComponent({
    name:'CarDetails',
    components:{
        NavBar
    },
    setup() {
        
    },
})
</script>
