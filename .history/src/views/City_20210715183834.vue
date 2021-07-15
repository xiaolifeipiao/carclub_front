<!--
 * @Author: xiaolifeipiao
 * @Description: 城市选择
 * @version: 0.0.0
 * @Date: 2021-07-15 13:25:40
 * @LastEditTime: 2021-07-15 18:38:34
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\City.vue
-->
<template>
    <my-nav-bar title="选择城市"></my-nav-bar>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MyNavBar from '@coms/MyNavBar.vue'
import AMapLoader from '@alife/amap-jsapi-loader';
export default defineComponent({
    name:'City',
    components:{
        MyNavBar
    },
    setup() {
        
    },
})
</script>
