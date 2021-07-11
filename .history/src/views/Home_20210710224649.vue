<!--
 * @Author: xiaolifeipiao
 * @Description: 车型大会首页
 * @version: 0.0.0
 * @Date: 2021-07-10 21:28:15
 * @LastEditTime: 2021-07-10 22:46:48
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\Home.vue
-->
<template>
    <!-- 导航条 -->
    <nav-bar :title="title"></nav-bar>
    
    <van-grid :column-num="5" :border="false">
        <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
         <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <!-- 标签 -->
    <my-tab-bar></my-tab-bar>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import {Grid, GridItem} from 'vant'
import NavBar from '@coms/NavBar.vue'
import MyTabBar from '@coms/MyTabBar.vue'
export default defineComponent({
  name: 'Home',
  components:{
    [Grid.name]:Grid,
    [GridItem.name]:GridItem,
    MyTabBar,
    NavBar
  },
  setup: () => {
    const title= ref('车型大会')
    return {
        title
    }
  }
})
</script>

<style scoped>

</style>
