<!--
 * @Author: xiaolifeipiao
 * @Description: 我的试驾
 * @version: 0.0.0
 * @Date: 2021-07-14 17:29:01
 * @LastEditTime: 2021-07-14 17:42:54
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\MyDrive.vue
-->
<template>
    <!-- 导航条 -->
    <nav-bar title="我的试驾"></nav-bar>
    <!-- 筛选 -->
     <div class="car_nav">
      <van-tag :plain='taggColor === 0' size="large" :color="taggColor !== 0? '#F6F7FB' : ''"  @click="selectClick(0)"  text-color="#1F2129"   >全部</van-tag>
      <van-tag :plain='taggColor === 1' class="tag" :color="taggColor !== 1? '#F6F7FB' : ''"  @click="selectClick(1)"  size="large" text-color="#1F2129">轿车</van-tag>
      <van-tag :plain='taggColor === 2'  class="tag"  :color="taggColor !== 2? '#F6F7FB' : ''"  @click="selectClick(2)"   size="large" text-color="#1F2129" >SUV</van-tag>
      <van-tag :plain='taggColor === 3'  class="tag"  :color="taggColor !== 3? '#F6F7FB' : ''"  @click="selectClick(3)"   size="large" text-color="#1F2129" >MPV</van-tag>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@coms/NavBar.vue'
export default defineComponent({
    name:'MyDrive',
    components:{
        NavBar
    },
    setup() {
        
    },
})
</script>
