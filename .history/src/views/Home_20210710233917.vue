<!--
 * @Author: xiaolifeipiao
 * @Description: 车型大会首页
 * @version: 0.0.0
 * @Date: 2021-07-10 21:28:15
 * @LastEditTime: 2021-07-10 23:39:17
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\Home.vue
-->
<template>
    <!-- 导航条 -->
    <nav-bar :title="title"></nav-bar>
    <van-grid :column-num="5" :border="false" :gutter="2">
        <van-grid-item v-for="item in brandList" :key="item.id"  :to='item.id' />
            <van-image class="brand_img" :src="item.brand_url"/>
            <span class="brand_name">{{item.name}}</span>
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
import {brandModel} from '@/models/brandModel'
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
    // 品牌数据
    const brandList:brandModel[] =[
        {
            id:'1',name:'奔驰',brand_url:'src/assets/icon/brand/奔驰.png'
        },
         {
            id:'2',name:'宝马',brand_url:'src/assets/icon/brand/宝马.png'
        },
         {
            id:'3',name:'沃尔沃',brand_url:'src/assets/icon/brand/沃尔沃.png'
        },
         {
            id:'4',name:'别克',brand_url:'src/assets/icon/brand/别克.png'
        },
         {
            id:'5',name:'马自达',brand_url:'src/assets/icon/brand/马自达.png'
        }
    ]
    return {
        title,
        brandList
    }
  }
})
</script>

<style scoped lang='less'>
.brand_img{
    width:32px;
    hight:32px;
}
.brand_name{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #1F2129;
    letter-spacing: 0;
    line-height: 18px;
    font-weight: 400;
}
</style>
