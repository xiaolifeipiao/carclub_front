<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情页开发
 * @version: 0.0.0
 * @Date: 2021-07-13 20:51:23
 * @LastEditTime: 2021-07-13 21:27:58
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\CarDetails.vue
-->
<template>
    <nav-bar :title="title"></nav-bar>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBar from '@coms/NavBar.vue'
import  CarRotates from '@/components/CarRotates .vue'
export default defineComponent({
    name:'CarDetails',
    components:{
        NavBar,
        Car360
    },
    setup() {
        // 车系
        const title = ref('车系');


        return{
            title
        }
    },
})
</script>
