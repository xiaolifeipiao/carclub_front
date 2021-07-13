<!--
 * @Author: xiaolifeipiao
 * @Description: 品牌车系页
 * @version: 0.0.0
 * @Date: 2021-07-11 19:08:08
 * @LastEditTime: 2021-07-12 21:35:36
 * @LastEditors: xiaolifeipiao
 * @FilePath: \src\views\BrandCarSeries.vue
-->

<template>
  <van-config-provider :theme-vars="themeVars">
    <nav-bar title="奥迪"></nav-bar>
    <van-tabs @click="onClick" class="mytab">
      <van-tab title="在售"></van-tab>
      <van-tab title="未售"></van-tab>
      <van-tab title="停售"></van-tab>
    </van-tabs>
    <div class="car_nav">
      <van-tag :plain='taggColor === 0' size="large" :color="taggColor !== 0? '#F6F7FB' : ''"  @click="selectClick(0)"  text-color="#1F2129"   >全部</van-tag>
      <van-tag :plain='taggColor === 1' class="tag" :color="taggColor !== 1? '#F6F7FB' : ''"  @click="selectClick(1)"  size="large" text-color="#1F2129">轿车</van-tag>
      <van-tag :plain='taggColor === 2'  class="tag"  :color="taggColor !== 2? '#F6F7FB' : ''"  @click="selectClick(2)"   size="large" text-color="#1F2129" >SUV</van-tag>
      <van-tag :plain='taggColor === 3'  class="tag"  :color="taggColor !== 3? '#F6F7FB' : ''"  @click="selectClick(3)"   size="large" text-color="#1F2129" >MPV</van-tag>
    </div>
    <!-- <div v-for="item in carSerieslist">
      <car-series-item :isCarRate='true' :rateList="item"></car-series-item>
    </div> -->
    <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in state.list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </van-config-provider>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted,reactive } from 'vue'
import {Tab, Tabs ,Tag ,List ,PullRefresh } from 'vant';
import { useRouter } from 'vue-router';
import CarSeriesItem from '@coms/CarSeriesItem.vue'
import NavBar from '@coms/NavBar.vue'
import {carSeriesModel} from '@/models/carSeriesModel'
import {selectCarSeriesType} from '@/utils/enumType'
export default defineComponent({
  name: 'BrandCarSeries',
  components:{
    [Tab.name]:Tab,
    [List.nane]:List,
    [PullRefresh.name]:PullRefresh,
    [Tabs.name]:Tabs,
    [Tag.name]:Tag,
    CarSeriesItem,
    NavBar
  },
  setup: (props) => {
    // 定义切换车型
    const taggColor = ref(0)
    const carSerieslist:Array<carSeriesModel>=[
      {
        id:1,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:2,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:3,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:4,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:5,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:6,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:7,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:8,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:9,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:10,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:11,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:12,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
       {
        id:13,
        brand_id:2,
        outter_name:'奥迪A4L',
        brand_name:'奥迪',
        dealer_price:26.30,
        dcar_score: 3.88,
        cover_url:'https://p1-dcd.byteimg.com/img/motor-img/8c3ea5cc5a4111968b4d24c2f86c9cad~tplv-resize:640:0.png',
      },
      
    ]
    const themeVars = {
      tabsBottomBarColor:'#1F2129',
      tabFontSize:'18px',
      tabTextColor:'#1F2129',
      tabsBottomBarWidth:'20px'
    };
    // 选择车的在售状态
    const onClick = (index, title) => console.log(index,title);
    // 选择车型
    const selectClick = (index)=>{
      console.log(index)
      taggColor.value = index
    }
    return { 
        themeVars,
        carSerieslist,
        onClick,
        selectClick,
        taggColor
     }
  }
})
</script>
<style lang="less" scoped>
.mytab{
  width: 200px;
  height: 44px;
  margin-left: 5px;
}
.car_nav{
  margin: 5px 16px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .tag{
    margin-left: 10px;
  }
}

</style>
