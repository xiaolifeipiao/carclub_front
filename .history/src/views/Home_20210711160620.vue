<!--
 * @Author: xiaolifeipiao
 * @Description: 车型大会首页
 * @version: 0.0.0
 * @Date: 2021-07-10 21:28:15
 * @LastEditTime: 2021-07-11 16:06:20
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\Home.vue
-->
<template>
    <!-- 导航条 -->
    <nav-bar :title="title"></nav-bar>
    <div class="brand">
        <van-grid :column-num="5" :border="false" :gutter="2">
        <van-grid-item v-for="item in brandList" :key="item.id"  :to="{path: 'test', query: {id: item.id }}">
            <van-image class="brand_img" :src="item.brand_url"/>
            <span class="brand_name">{{item.name}}</span>
        </van-grid-item>
    </van-grid>
    </div>
    <!-- 猜你喜欢 -->
    <p class="related">猜你喜欢</p>
    <van-config-provider :theme-vars="themeVars">
        <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="item in related" :key="item.id"  :to="{path: 'test', query: {id: item.id }}">
            <van-image class="related_img" :src="item.brand_url"/>
            <span class="related_name">{{item.name}}</span>
        </van-grid-item>
    </van-grid>
    </van-config-provider>
     <!-- 广告条 -->
     <div class="adv">
         <van-tag class="tag" color="#205BE6" size="medium" text-color="#fff">新车</van-tag>
     </div>
    <!-- 标签 -->
    <my-tab-bar></my-tab-bar>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import {Grid, GridItem,Image,Tag } from 'vant'
import NavBar from '@coms/NavBar.vue'
import MyTabBar from '@coms/MyTabBar.vue'
import {brandModel} from '@/models/brandModel'
export default defineComponent({
  name: 'Home',
  components:{
    [Grid.name]:Grid,
    [Tag.name]:Tag,
    [Image.name]:Image,
    [GridItem.name]:GridItem,
    MyTabBar,
    NavBar
  },
  setup: () => {
    const title= ref('车型大会')
     const themeVars = {
         gridItemContentPadding:'5px'
    };
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
    //猜你喜欢
    const related:Array<brandModel>=[
         {
            id:'1',name:'奔驰GIC',brand_url:'src/assets/webp/1.webp'
        },
         {
            id:'2',name:'宝马X1',brand_url:'src/assets/webp/2.webp'
        },
         {
            id:'3',name:'奔驰CG',brand_url:'src/assets/webp/3.webp'
        },
         {
            id:'4',name:'指南者',brand_url:'src/assets/webp/4.webp'
        },
         {
            id:'5',name:'速腾',brand_url:'src/assets/webp/5.webp'
        },
         {
            id:'6',name:'宝马3系',brand_url:'src/assets/webp/6.webp'
        },
    ]
    return {
        title,
        brandList,
        related,
        themeVars
    }
  }
})
</script>

<style scoped lang='less'>
.brand{
    margin: 0 20px;
}
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
.related{
    margin:0 0 0 16px;
    font-size: 14px;
    color: #1F2129;
    font-weight: 600;
}
.related_img{
    width:84px;
    hight:56px;
}
.related_name{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #1F2129;
    letter-spacing: 0;
    line-height: 18px;
    font-weight: 400;
}
.adv {
    margin: 10px 16px;
    height: 40px;
    background: #F7F8FC;
    border-radius: 2px;
    .tag{
        margin-left:12px;
        line-height:20px
    }
}
</style>
