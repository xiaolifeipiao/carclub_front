<!--
 * @Author: xiaolifeipiao
 * @Description: 车系详情页开发
 * @version: 0.0.0
 * @Date: 2021-07-13 20:51:23
 * @LastEditTime: 2021-07-13 21:52:44
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\CarDetails.vue
-->
<template>
    <!-- 导航 -->
    <nav-bar :title="title"></nav-bar>
    <!-- 车旋转360° -->
    <car-rotates></car-rotates>
    <!-- 车系栏 -->
    <div class="car_series">
        <div class="series_left">
            <div class="">
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="series_right"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBar from '@coms/NavBar.vue'
import  CarRotates from '@/components/CarRotates .vue'
export default defineComponent({
    name:'CarDetails',
    components:{
        NavBar,
        CarRotates
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
<style lang="less" scoped>
.car_series{
    display: -webkit-flex;
    display: flex;
    height: 66px;
    width: 100%;
    .series_left{
        flex: 8;
        background-color: red;
    }
    .series_right{
        flex: 2;
        background-color: blue;
    }
}
</style>