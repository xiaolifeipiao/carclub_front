<!--
 * @Author: xiaolifeipiao
 * @Description: 车型大会首页
 * @version: 0.0.0
 * @Date: 2021-07-10 21:28:15
 * @LastEditTime: 2021-07-10 22:56:50
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\Home.vue
-->
<template>
    <!-- 导航条 -->
    <nav-bar :title="title"></nav-bar>
    
    <van-grid :column-num="5" :border="false" :gutter="2">
        <van-grid-item>
            <van-image src="src/assets/icon/brand/奔驰.png" style="width:32px;hight:32px;" />
            <span>奔驰</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="src/assets/icon/brand/奔驰.png" />
            <span>奔驰</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="src/assets/icon/brand/奔驰.png" />
            <span>奔驰</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="src/assets/icon/brand/奔驰.png" />
            <span>奔驰</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="src/assets/icon/brand/奔驰.png" />
            <span>奔驰</span>
        </van-grid-item>
    </van-grid>
    <!-- 标签 -->
    <my-tab-bar></my-tab-bar>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import {Grid, GridItem,Image} from 'vant'
import NavBar from '@coms/NavBar.vue'
import MyTabBar from '@coms/MyTabBar.vue'
export default defineComponent({
  name: 'Home',
  components:{
    [Grid.name]:Grid,
    [Image.name]:Image,
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
