<!--
 * @Author: xiaolifeipiao
 * @Description: 城市选择
 * @version: 0.0.0
 * @Date: 2021-07-15 13:25:40
 * @LastEditTime: 2021-07-15 22:27:48
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\City.vue
-->
<template>
    <my-nav-bar title="选择城市"></my-nav-bar>
    <div id="container" style="height: 800px;width: 800px;"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MyNavBar from '@coms/MyNavBar.vue'
import {showCityInfo} from '@/hooks/getCityLocation'
export default defineComponent({
    name:'City',
    components:{
        MyNavBar
    },
    setup() {
      console.log(await showCityInfo())

    },
})
</script>
